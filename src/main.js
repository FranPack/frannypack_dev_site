const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "/markdown")
let projectList = []

const getMarkdown = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contets of directory: " + err)
        }
        console.log(files)
        files.forEach((file, i) => {
            let obj  = {}
            let project
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata  = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n") 
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines,  metadataIndices})
                const content = parseContent({lines, metadataIndices})
                const date = new Date(metadata.date)
                const timestamp = date.getTime() / 1000
                project = {
                    id: timestamp,
                    slug: metadata.slug ? metadata.slug.replace("\r", "") : "No slug given",
                    title: metadata.title ? metadata.title : "No title given",
                    stack: metadata.stack ? metadata.stack : "No stack given",
                    ImgUrl: metadata.archiveImgUrl ? ("/assets/imgs/" + metadata.archiveImgUrl) : "No img given",
                    content: content ? content : "No content given"
                }
                console.log(project)
                projectList.push(project)
                // console.log(projectList)
                if (i === files.length - 1) {
                    const sortedList = projectList.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/projects.json", data)
                }
            })
        })
    })
    return
}

getMarkdown()