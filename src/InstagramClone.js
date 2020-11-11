import React, { useState } from "react";
import Page from "./Page";
import InstaCImg1 from "./static/images/instagram-clone/instagram-clone-1st.jpg";
import InstaCImg2 from "./static/images/instagram-clone/instagram-clone-3rd.jpg";
import InstaCImg3 from "./static/images/instagram-clone/instagram-clone-2nd.jpg";

function InstagramClone() {
    // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("instagram_clone");

  const [title, setTitle] = useState("Instagram clone ReactJs");
  const [secondTitle, setsecondTitle] = useState("Instagram clone ReactJs with google firebase for Database, authentification and hosting...");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://instagram-clone-react-js.web.app/");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/Instagram-clone-ReactJs");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(InstaCImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Home page");
  const [flipper_key2, setFlipper_key2] = useState(InstaCImg2);
  const [flipper_key2Alt, setFlipper_key2Alt] = useState("Instagram comments functionality");
  const [flipper_key3, setFlipper_key3] = useState(InstaCImg3);
  const [flipper_key3Alt, setFlipper_key3Alt] = useState("Uploading pics functionality");

  const [skillsTable, setSkillsTable] = useState([
    "ReactJs",
    "Real Time db with Firebase",
    "Firebase (hosting, database, auth)",
    "Material UI",
    "Cloud Functions",
    "3rd Party: UseState and UseEffect hooks",
    "Uploading Pictures and comments functionnality",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(InstaCImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Home page");
  const [flipper_image2, setFlipper_image2] = useState(InstaCImg2);
  const [flipper_image2Alt, setFlipper_image2Alt] = useState("Instagram comments functionality");
  const [flipper_image3, setFlipper_image3] = useState(InstaCImg3);
  const [flipper_image3Alt, setFlipper_image3Alt] = useState("Uploading pics functionality");

  const [projectDescriptions, setProjectDescriptions] = useState(    "Instagram clone with React as Front-End and google firebase one of the easiest and most proficient Back-End");

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
        flipper_key2={flipper_key2}
        flipper_key3={flipper_key3}
        flipper_key1Alt={flipper_key1Alt}
        flipper_key2Alt={flipper_key2Alt}
        flipper_key3Alt={flipper_key3Alt}
        flipper_image1={flipper_image1}
        flipper_image2={flipper_image2}
        flipper_image3={flipper_image3}
        flipper_image1Alt={flipper_image1Alt}
        flipper_image2Alt={flipper_image2Alt}
        flipper_image3Alt={flipper_image3Alt}
        projectDescriptions={projectDescriptions}
        skillsTable={skillsTable}
      />
    </div>
  );
}

export default InstagramClone;
