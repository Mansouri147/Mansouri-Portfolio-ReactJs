import React from "react";
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
          {props.projects.map((project) => (
            <li><a id="ProjectsItem__singleProject" href={project.href}>{project.name}</a></li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ProjectsItem;
