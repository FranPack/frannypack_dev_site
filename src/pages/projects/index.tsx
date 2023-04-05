
import React from 'react'
import { Markup } from "interweave"
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { GetStaticProps } from "next"
import Date from "../../components/date"
import PortfolioLayout from "../../components/PortfolioLayout"
import type { ProjectData } from "../../lib/types"
import { getProjectPostData } from '../../lib/projects'                     
// Lazy way to import Language Images
import ReactIMG from "../../../public/img/Stacks/React.png";
import BootstrapIMG from "../../../public/img/Stacks/Bootstrap.png";
import HTMLIMG from "../../../public/img/Stacks/HTML.png";
import MarkdownIMG from "../../../public/img/Stacks/Markdown.svg";
import CSSIMG from "../../../public/img/Stacks/CSS.png";
import JavaScriptIMG from "../../../public/img/Stacks/JavaScript.png";
import NodeIMG from "../../../public/img/Stacks/Node.png";
import MongoDBIMG from "../../../public/img/Stacks/MongoDB.png";
import PHPIMG from "../../../public/img/Stacks/PHP.png"


type Props = {
    allProjectsData: ProjectData[];
}

export default function ProjectPage({ allProjectsData }: Props) {
    const convertStack = (stack: string[]) => {
        let valid = [
          "React",
          "HTML",
          "CSS",
          "Markdown",
          "JavaScript",
          "Bootstrap",
          "Node",
          "PHP",
        ];
        let images: any = [];
        for (let i = 0; i < valid.length; i++) {
          if (stack.includes(valid[i])) {
            if (valid[i].toUpperCase() === "Markdown".toUpperCase()) {
              images = `<Image class="project-stack markdown-logo" src=${MarkdownIMG} alt=${valid[i]}>` + images;
            } else if (valid[i].toUpperCase() === "HTML".toUpperCase()) {
              images = `<Image class="project-stack " src=${HTMLIMG} alt=${valid[i]}>` + images;
            } else if (valid[i].toUpperCase() === "React".toUpperCase()) {
              images = `<Image class="project-stack" src=${ReactIMG} alt=${valid[i]}>` + images;
            } else if (valid[i].toUpperCase() === "CSS".toUpperCase()) {
              images = `<Image class="project-stack" src=${CSSIMG} alt=${valid[i]}>` + images;
            } else if (valid[i].toUpperCase() === "Node".toUpperCase()) {
              images = `<Image class="project-stack" src=${NodeIMG} alt=${valid[i]}>` + images;
            } else if (valid[i].toUpperCase() === "JavaScript".toUpperCase()) {
              images = `<Image class="project-stack" src=${JavaScriptIMG} alt=${valid[i]}>` + images;
            } else if (valid[i].toUpperCase() === "MongoDB".toUpperCase()) {
              images = `<Image class="project-stack" src=${MongoDBIMG} alt=${valid[i]}>` + images;
            } else if (valid[i].toUpperCase() === "Bootstrap".toUpperCase()) {
              images = `<Image class="project-stack" src=${BootstrapIMG} alt=${valid[i]}>` + images;
            } else if (valid[i].toUpperCase() === "PHP".toUpperCase()) {
              images = `<Image class="project-stack" src=${PHPIMG} alt=${valid[i]}>` + images;
            } 
          }
        }
        return <Markup content={images} noWrap/>;
    }
    return(
        
        <>
            <PortfolioLayout>
                <Head>
                    <title>Blog</title>
                    <meta
                    name="description"
                    content="My personal website built with Next.js"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="project-list">
                    <div className="page-description">
                        <h1 className="page-title">All Projects</h1>
                        <p className="page-summary">Here you can find the projects I have worked on including current ones. You can click on each project to view a brief explanation of the project and its purpose. <span style={{fontFamily: "Cascadia Code", fontWeight: "bold"}}>(Under Construction)</span></p>
                    </div>
                    {allProjectsData.map(({title, slug, date, tags, thumbnailUrl}: ProjectData) => {
                        console.log(tags)
                        return (
                            <div key={slug} className="project-card">
                                <Link href={`/projects/${slug}`} itemProp="url">
                                <Image width={500} height={500} src={`/img/Projects/${thumbnailUrl}`} alt={title} className="project-img"/>
                                </Link>
                                <div className="project-details">
                                <Link href={`/projects/${slug}`} itemProp="url"><h2 className="project-title">{title}</h2></Link>
                                <div className="project-stack-container">
                                    {tags.map((tag: string) => {
                                        return (
                                            <div key={tag} className="stack-container">
                                                <Image 
                                                alt={tag} 
                                                className="project-stack"
                                                fill
                                                src={`/img/Stacks/${tag}.png`}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </PortfolioLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // fetch list of projects
    const allProjectsData = await getProjectPostData()
    return {
        props: {
            allProjectsData
        }
    }
}