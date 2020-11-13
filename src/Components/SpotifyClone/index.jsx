import React, { useState } from "react";
import Page from "../Page";
import AmazonCImg1 from "../../static/images/amazon_images/amazon-home-page.jpg";

function SpotifyClone() {
  // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("spotify_clone");

  const [title, setTitle] = useState("Spotify Clone");
  const [secondTitle, setSecondTitle] = useState("Spotify Clone ReactJs built with React Router feature");

  const [liveDemoUrl, setLiveDemoUrl] = useState("");
  const [githubRepoUrl, setGithubRepoUrl] = useState("");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(AmazonCImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Home Page");

  const [skillsTable, setSkillsTable] = useState([
    "User authentication",
    "Spotify API",
    "CSS Hacks",
    "Material UI",
    "Responsive Design",
    "Flexbox(CSS)",
    "Modern Tech",
  ]);
  const [skillsTable2, setSkillsTable2] = useState([
    "React Hooks Functional ( Hooks, State, UseStateValue )",
    "Firebase (hosting)",
    "React Context API (Like REDUX)",
    "Entire React Tech Stack",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(AmazonCImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Responsive Design");

  const [projectDescriptions, setProjectDescriptions] = useState("Spotify Clone descriptions");

  return (
    <div>
      <Page
        key={projectName}
        projectName={projectName}
        title={title}
        secondTitle={secondTitle}
        flipper_key1={flipper_key1}
        flipper_key1Alt={flipper_key1Alt}
        flipper_image1={flipper_image1}
        flipper_image1Alt={flipper_image1Alt}
        projectDescriptions={projectDescriptions}
        skillsTable={skillsTable}
        skillsTable2={skillsTable2}
      />
    </div>
  );
}

export default SpotifyClone;
