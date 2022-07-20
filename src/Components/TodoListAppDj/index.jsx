import React, { useState } from "react";
import Page from "../Page";
import TDListDjImg1 from "../../static/images/todo_list_django/Todo_List.jpg";

function TodoListAppDj() {
  // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("todo_list");

  const [title, setTitle] = useState("Todo List app Django");
  const [subtitle1, setSubtitle1] = useState("A simple Todo_List App built with Django and bootstrap.");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://todo-list-django.herokuapp.com/");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/Todo_List-app-Django");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(TDListDjImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Main Page");

  const [skillsTable, setSkillsTable] = useState([
    "Django", 
    "Bootstrap", 
    "Databases", 
    "Django model", 
    "Django ORM", 
    "Heroku"]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(TDListDjImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Main Page");

  const [projectDescriptions, setProjectDescriptions] = useState(
    "In this App the main goal was to focus on how to start a project how to plan for it and on interacting programmatically with the database using our model (ORM) in Django"
  );

  return (
    <div>
      <Page
        key={projectName}
        projectName={projectName}
        title={title}
        subtitle1={subtitle1}
        liveDemoUrl={liveDemoUrl}
        githubRepoUrl={githubRepoUrl}
        flipper_key1={flipper_key1}
        flipper_key1Alt={flipper_key1Alt}
        flipper_image1={flipper_image1}
        flipper_image1Alt={flipper_image1Alt}
        projectDescriptions={projectDescriptions}
        skillsTable={skillsTable}
      />
    </div>
  );
}

export default TodoListAppDj;
