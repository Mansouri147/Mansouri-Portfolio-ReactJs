import React, { useState } from "react";
import Page from "../Page";
import PTemplateImg1 from "../../static/images/portfolio_template/On_hover_home_and_eventbrite.png";
import PTemplateImg2 from "../../static/images/portfolio_template/Portfolio_About_page.png";
import PTemplateImg3 from "../../static/images/portfolio_template/Portfolio_whole_template.png";
import PTemplateImg4 from "../../static/images/portfolio_template/About_page.png";
import PTemplateImg4 from "../../static/images/portfolio_template/";

function Portfolio_template() {
    // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("portfolio_template");

  const [title, setTitle] = useState("Portfolio Template");
  const [secondTitle, setSecondTitle] = useState("professional portfolio website (HTML, CSS, JavaScript)");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://portfolio-website-template.herokuapp.com/index.html");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/Portfolio");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(PTemplateImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Main Page");
  const [flipper_key2, setFlipper_key2] = useState(PTemplateImg2);
  const [flipper_key2Alt, setFlipper_key2Alt] = useState("About page");
  const [flipper_key3, setFlipper_key3] = useState(PTemplateImg3);
  const [flipper_key3Alt, setFlipper_key3Alt] = useState("Neat 'n tidy css Grid design");
  const [flipper_key4, setFlipper_key4] = useState(PTemplateImg4);
  const [flipper_key4Alt, setFlipper_key4Alt] = useState("About page sized 100%");

  const [skillsTable, setSkillsTable] = useState([
    "JavaScript",
    "HTML5",
    "CSS3 Hacks: Grid, Flexbox, animations",
    "Adobe Photoshop",
    "Website Development",
    "Web Design",
    "CSS Grid",
    "Heroku",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(PTemplateImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Main Page");
  const [flipper_image2, setFlipper_image2] = useState(PTemplateImg2);
  const [flipper_image2Alt, setFlipper_image2Alt] = useState("About page");
  const [flipper_image3, setFlipper_image3] = useState(PTemplateImg3);
  const [flipper_image3Alt, setFlipper_image3Alt] = useState("Neat 'n tidy css Grid design");
  const [flipper_image4, setFlipper_image4] = useState(PTemplateImg4);
  const [flipper_image4Alt, setFlipper_image4Alt] = useState("About page sized 100%");

  const [projectDescriptions, setProjectDescriptions] =
useState(    "I just build up a fully professional Portfolio website template that you can find all planning steps or we can call it the bone of any project in github readme.md");

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
        flipper_key4={flipper_key4}
        flipper_key1Alt={flipper_key1Alt}
        flipper_key2Alt={flipper_key2Alt}
        flipper_key3Alt={flipper_key3Alt}
        flipper_key4Alt={flipper_key4Alt}
        flipper_image1={flipper_image1}
        flipper_image2={flipper_image2}
        flipper_image3={flipper_image3}
        flipper_image4={flipper_image4}
        flipper_image1Alt={flipper_image1Alt}
        flipper_image2Alt={flipper_image2Alt}
        flipper_image3Alt={flipper_image3Alt}
        flipper_image4Alt={flipper_image4Alt}
        projectDescriptions={projectDescriptions}
        skillsTable={skillsTable}
      />
    </div>
  );
}

export default Portfolio_template;
