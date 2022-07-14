import React from "react";
import Page from "../Page";
import projects from "./AmaZonCloneData.json";

const AmazonClone = () =>
  projects.length > 0 &&
  projects.map((project) => (
    <div>
      <Page key={project.projectName} project={project} />
    </div>
  ));

export default AmazonClone;
