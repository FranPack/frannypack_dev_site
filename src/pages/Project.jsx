import React from "react"
import { useParams, Navigate } from "react-router-dom"
import Markdown from "react-markdown"
import ProjectLayout from "../components/Layouts/ProjectLayout" 
import ProjectList from "../projects.json"


const Project = () => {
    const {projectslug} = useParams()
    let fetchedProject = {}
    let projectExists = false
    ProjectList.forEach((project, i) => {
        if (projectslug === project.slug) {
            fetchedProject.title = project.title ? project.title : "No title given"
            fetchedProject.date = project.date ? project.date : "No date given"
            fetchedProject.slug = project.slug ? project.slug.slice(0, -2) : "No slug given"
            fetchedProject.content = project.content ? project.content : "No content given"
            projectExists = true
        }
    })
    if (projectExists === false) {
        return <Navigate to="/404" />
    }
    return (
        <>
            <ProjectLayout>
                <div className="project-content">
                    <Markdown children={fetchedProject.content} escapeHTML={false}/>
                </div>
            </ProjectLayout>
        </>
    )
}

export default Project;
