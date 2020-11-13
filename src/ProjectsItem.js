import React, { useState } from "react";
import "./ProjectsItem.scss";

function ProjectsItem(props) {
  return (
    <li className="projects-item">
      <a>
        <div className="projects-background-images" style={{ backgroundImage: `url("${props.background}")` }}></div>
      </a>
      <div className="project-inner-container">
        <h3>{props.projectsItemTitle}</h3>
        {props.fadeOut ? <img id="fadeOut" src={props.logo} /> : <img src={props.logo} />}
        <ul>
          {props.projects.map((project) =>
            project.projectInfos.map((projectInfo) => 
              <li><a id="ProjectsItem__singleProject" href={projectInfo.href}>{projectInfo.name}</a></li>))}
        </ul>
         {/* <ul>
          {props.projects.map((project) =>
            project.projectInfos.map((projectInfo) => 
            projectInfo.map((name) => <li>{name.name}</li>)))}
        </ul> */}
      </div>
    </li>
  );
}

export default ProjectsItem;
