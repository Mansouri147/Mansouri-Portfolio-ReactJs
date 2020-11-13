import React, { useState } from "react";
import Page from "../Page";
import TikTokCImg1 from "../../static/images/tiktok-clone/tiktok_PHOTO.jpg";

function TikTokClone() {
    // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("tiktok_clone");

  const [title, setTitle] = useState("TikTok Clone");
  const [secondTitle, setSecondTitle] = useState("TikTok Clone ReactJs Material-ui and Firebase ( Under Development )");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://tik-tok-clon-e.web.app/");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/Tik_Tok-Clone");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(TikTokCImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Home Page");

  const [skillsTable, setSkillsTable] = useState([
    "JavaScript",
    "React Router",
    "Video Player",
    "Firebase (hosting, database)",
    "Material UI",
    "CSS hacks ( Flexbox, <br>Snap functionality)",
    "Web Design",
    "3rd Party: UseStateValue and UseEffect hooks",
    "React Ticker lib",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(TikTokCImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Home Page");

  const [projectDescriptions, setProjectDescriptions] = useState(    "Tik Tok Clone built with ReactJs and Firebase");

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

export default TikTokClone;
