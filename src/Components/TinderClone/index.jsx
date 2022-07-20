import React, { useState } from "react";
import Page from "../Page";
import TinderCImg1 from "../../static/images/amazon_images/amazon-home-page.jpg";

function TinderClone() {
  // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("tinder_clone");

  const [title, setTitle] = useState("Tinder Clone");
  const [subtitle1, setSubtitle1] = useState("Tinder Clone ReactJs Chat app for dating ( Under Development )");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://tinder-clone-63b29.web.app/");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/Tinder-Clone");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(TinderCImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Home Page");

  const [skillsTable, setSkillsTable] = useState([
    "JavaScript",
    "React Router",
    "Firebase (hosting, database)",
    "Material UI",
    "CSS Hacks",
    "Web Design",
    "3rd Party: UseStateValue and UseEffect hooks",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(TinderCImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Home page");

  const [projectDescriptions, setProjectDescriptions] = useState(
    "Tinder Clone app for dating if you're looking to match up with somebody or a partner... it helps you match up. and basicly just swipe left and right till you find matches with each other then if somebody swipes right on you and you swipe right on them then you can start messaging them so... just a dating app."
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

export default TinderClone;
