import React, { useState } from "react";
import Page from "./Page";
import FBMessengerCImg1 from "./static/images/messenger-clone/Messenger-clone.png";

function FBMessengerClone() {
  // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("fb_messenger_clone");

  const [title, setTitle] = useState("Facebook Messenger clone ReactJs");
  const [secondTitle, setSecondTitle] = useState("Facebook Messenger clone ReactJs with google firebase for Database, and hosting...");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://facebook-messenger-clone-f17b7.web.app/");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/Facebook-Messenger-Clone");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(FBMessengerCImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Chat page");

  const [skillsTable, setSkillsTable] = useState([
    "ReactJs",
    "Real Time database with Firebase",
    "Firebase (hosting, auth)",
    "Material UI",
    "Cloud Functions",
    "3rd Party: UseState and UseEffect hooks",
    "messaging functionnality",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(FBMessengerCImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Chat page");

  const [projectDescriptions, setProjectDescriptions] = useState("Facebook Messenger clone one page app with ReactJS as Front-End and google firebase one of the easiest and most proficient Back-End");

  return (
    <div>
      <Page
        key={projectName}
        projectName={projectName}
        title={title}
        secondTitle={secondTitle}
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

export default FBMessengerClone;
