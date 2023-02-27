import { Markup } from "interweave";
import React from "react";
import pList from "../projects.json";
import "./components.css";
// Lazy way to import Language Images
import ReactIMG from "../img/Stacks/React.png";
import BootstrapIMG from "../img/Stacks/Bootstrap.png";
import HTMLIMG from "../img/Stacks/HTML.png";
import MarkdownIMG from "../img/Stacks/Markdown.svg";
import CSSIMG from "../img/Stacks/CSS.png";
import JavaScriptIMG from "../img/Stacks/JavaScript.png";
import NodeIMG from "../img/Stacks/Node.png";
import MongoDBIMG from "../img/Stacks/MongoDB.png";
import PHPIMG from "../img/Stacks/PHP.png";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const convertStack = (stack) => {
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
    let images = [];
    for (let i = 0; i < valid.length; i++) {
      if (stack.includes(valid[i])) {
        if (valid[i].toUpperCase() === "Markdown".toUpperCase()) {
          images = `<img class="project-stack markdown-logo" src=${MarkdownIMG} alt=${valid[i]}>` + images;
        } else if (valid[i].toUpperCase() === "HTML".toUpperCase()) {
          images = `<img class="project-stack " src=${HTMLIMG} alt=${valid[i]}>` + images;
        } else if (valid[i].toUpperCase() === "React".toUpperCase()) {
          images = `<img class="project-stack" src=${ReactIMG} alt=${valid[i]}>` + images;
        } else if (valid[i].toUpperCase() === "CSS".toUpperCase()) {
          images = `<img class="project-stack" src=${CSSIMG} alt=${valid[i]}>` + images;
        } else if (valid[i].toUpperCase() === "Node".toUpperCase()) {
          images = `<img class="project-stack" src=${NodeIMG} alt=${valid[i]}>` + images;
        } else if (valid[i].toUpperCase() === "JavaScript".toUpperCase()) {
          images = `<img class="project-stack" src=${JavaScriptIMG} alt=${valid[i]}>` + images;
        } else if (valid[i].toUpperCase() === "MongoDB".toUpperCase()) {
          images = `<img class="project-stack" src=${MongoDBIMG} alt=${valid[i]}>` + images;
        } else if (valid[i].toUpperCase() === "Bootstrap".toUpperCase()) {
          images = `<img class="project-stack" src=${BootstrapIMG} alt=${valid[i]}>` + images;
        } else if (valid[i].toUpperCase() === "PHP".toUpperCase()) {
          images = `<img class="project-stack" src=${PHPIMG} alt=${valid[i]}>` + images;
        } 
      }
    }
    return <Markup content={images} noWrap/>;
  };
  return (
    <>
      <div className="project-list">
        <div className="page-description">
          <h1 className="page-title">All Projects</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit sapiente aliquam aspernatur obcaecati pariatur recusandae nostrum molestias! Omnis, quidem dolorum! Maiores, quod soluta impedit itaque quo eos non eligendi repellendus?</p>
        </div>
        {pList.length &&
          pList.map((project, i) => {
            return (
              <div className="project-card">
                <Link to={`/projects/${project.slug}`}>
                  <img src={project.ImgUrl} alt={project.title} className="project-img"/>
                </Link>
                <div className="project-details">
                <Link to={`/projects/${project.slug}`}><h2 className="project-title">{project.title}</h2></Link>
                  <div className="project-stack-container">
                    {convertStack(project.stack)}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProjectList;
