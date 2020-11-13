import React, { useState } from "react";
import Page from "../Page";
import ResponsiveDPrImg1 from "../../static/images/introducing_responsive_design/Introducing-responsive-main.jpg";
import ResponsiveDPrImg2 from "../../static/images/introducing_responsive_design/Introducing-responsive-2nd-page.jpg";

function ResponsiveDesignPractice() {
  // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("responsive_design");

  const [title, setTitle] = useState("Introducing Responsive Design");
  const [secondTitle, setSecondTitle] = useState("Responsive Design Practice");

  const [liveDemoUrl, setLiveDemoUrl] = useState("");
  const [githubRepoUrl, setGithubRepoUrl] = useState("");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(ResponsiveDPrImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Responsive Design");
  const [flipper_key2, setFlipper_key2] = useState(ResponsiveDPrImg2);
  const [flipper_key2Alt, setFlipper_key2Alt] = useState("Zoom-In");

  const [skillsTable, setSkillsTable] = useState([
    "JavaScript",
    "CSS Hacks ( Animations: Keyframes and media screens )",
    "Responsive Design",
    "Web Design",
    "SVG usage",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(ResponsiveDPrImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Responsive Desig");
  const [flipper_image2, setFlipper_image2] = useState(ResponsiveDPrImg2);
  const [flipper_image2Alt, setFlipper_image2Alt] = useState("Zoom-In");

  const [projectDescriptions, setProjectDescriptions] = useState(
    "You know that kind of moment when you say :Hey... let's practice some Responsive Design then you immediately do it."
  );

  return (
    <div>
      <Page
        key={projectName}
        projectName={projectName}
        title={title}
        secondTitle={secondTitle}
        flipper_key1={flipper_key1}
        flipper_key2={flipper_key2}
        flipper_key1Alt={flipper_key1Alt}
        flipper_key2Alt={flipper_key2Alt}
        flipper_image1={flipper_image1}
        flipper_image2={flipper_image2}
        flipper_image1Alt={flipper_image1Alt}
        flipper_image2Alt={flipper_image2Alt}
        projectDescriptions={projectDescriptions}
        skillsTable={skillsTable}
      />
    </div>
  );
}

export default ResponsiveDesignPractice;
