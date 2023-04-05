
import fs from "fs"
import path from "path"
import { bundleMDX } from "mdx-bundler"
import remarkGfm from "remark-gfm"
import rehypePrism from "rehype-prism-plus"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkMdxImages from "remark-mdx-images"
import codeTitle from "remark-code-title"
import emoji from "remark-emoji"
import remarkEmbedder from "@remark-embedder/core"
import matter from "gray-matter"
import type { Frontmatter } from "./types"

const projectsDirectory = path.join(process.cwd(), "/src/projects")

export async function getProjectData(slug: string) {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const mdxSource = fs.readFileSync(fullPath, "utf-8")

    const { code, frontmatter } = await bundleMDX({
        source: mdxSource,
        mdxOptions(options) {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkMdxImages, emoji, codeTitle, ];
            options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug, [rehypeAutolinkHeadings, {
                behavior: 'wrap',
            }],
            [rehypePrism, {
                    showLineNumbers: false,
                    ignoreMissing: false,
            }]];

            return options
        },
        
    })

    return {
        slug,
        frontmatter,
        code,
    }
}

export async function getProjectPostData() {
    const filenames = fs.readdirSync(projectsDirectory)
    const allProjectsData = filenames.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "")

        const fullPath = path.join(projectsDirectory, filename)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            slug,
            ...(matterResult.data as Frontmatter),
        }
    })

    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });
}

export async function getAllProjectSlugs() {
    const filenames = fs.readdirSync(projectsDirectory)
    return filenames.map((filename) => {
        return {
            params: {
                slug: filename.replace(/\.mdx$/, "")
            },
        }
    })
}