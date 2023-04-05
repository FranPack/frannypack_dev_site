import React, { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticPaths, GetStaticProps } from "next"
import { getAllProjectSlugs, getProjectData } from "../../lib/projects"
import Date from "../../components/date"
import ProjectLayout from "../../components/ProjectLayout"
import { Frontmatter } from "../../lib/types"
import Twemoji from 'react-twemoji'

type Props = {
    code: string;
    frontmatter: Frontmatter;
}

export default function ProjectPost({ code, frontmatter }: Props) {
    const Component = useMemo(() => getMDXComponent(code), [code])
    return (//render individual project page
        <>
        <ProjectLayout>
            <Twemoji options={{ className: 'twemoji' }}>
                <section itemProp="articleBody" className="markdown-body prose md:prose-lg ls:prose-xl mx-auto my-4">
                    <Component />
                </section>
            </Twemoji>
        </ProjectLayout>
        
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    //get list of all slugs
    const paths = await getAllProjectSlugs()
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    //fetch individual project
    const projectData = await getProjectData(params?.slug as string)
    return {
        props: {
            ...projectData,
        }
    }
}