import React, { useState } from "react";
import Page from "./Page";
import YoutubeCImg1 from "./static/images/youtube_clone/youtube_clone.jpg";
import AmazonCImg2 from "./static/images/amazon_images/amazon-checkout-page.jpg";

function YoutubeClone() {
    // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("youtube_clone");

  const [title, setTitle] = useState("Youtube Clone");
  const [secondTitle, setSecondTitle] = useState("Youtube Clone ReactJs two pages included built by React Router feature");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://you-tube-clonee.web.app");
  const [githubRepoUrl, setGithubRepoUrl] = useState("");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(YoutubeCImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Home Page");
  // const [flipper_key2, setFlipper_key2] = useState(AmazonCImg2);
  // const [flipper_key2Alt, setFlipper_key2Alt] = useState("Search Page");

  const [skillsTable, setSkillsTable] = useState([
    "JavaScript",
    "React Router",
    "Firebase (hosting, database)",
    "Context API ( LIKE REDUX )",
    "Material UI",
    "CSS Hacks",
    "Web Design",
    "3rd Party: UseStateValue and UseEffect hooks",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(YoutubeCImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Responsive Design");
  // const [flipper_image2, setFlipper_image2] = useState(AmazonCImg2);
  // const [flipper_image2Alt, setFlipper_image2Alt] = useState("Search Page");

  const [projectDescriptions, setProjectDescriptions] =
useState(    "Youtube Clone homepage and Search page with React Router components");

  return (
    <div>
      <Page
        key={projectName}
        projectName={projectName}
        title={title}
        secondTitle={secondTitle}
        flipper_key1={flipper_key1}
        liveDemoUrl={liveDemoUrl}
        // flipper_key2={flipper_key2}
        flipper_key1Alt={flipper_key1Alt}
        // flipper_key2Alt={flipper_key2Alt}
        flipper_image1={flipper_image1}
        // flipper_image2={flipper_image2}
        flipper_image1Alt={flipper_image1Alt}
        // flipper_image2Alt={flipper_image2Alt}
        projectDescriptions={projectDescriptions}
        skillsTable={skillsTable}
        
      />
    </div>
  );
}

export default YoutubeClone;
