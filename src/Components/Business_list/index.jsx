import React, { useEffect, useState } from "react";
import Page from "../Page";
import BlistImg1 from "../../static/images/business_list/Business_list_1.png";
import BlistImg2 from "../../static/images/business_list/Business_list_2.png";
import BlistImg3 from "../../static/images/business_list/Business_list_size_33percent.png";
import BlistImg4 from "../../static/images/business_list/Business_list_size_67percent.png";

function Business_list() {
  const [projectName, setProjectName] = useState("business_list");

  const [title, setTitle] = useState("Craigslist app clone: Bussiness list");
  const [subtitle1, setSubtitle1] = useState("A fast Craigslist web scraper with a beautiful GUI");
  const [liveDemoUrl, setLiveDemoUrl] = useState("https://business-list.herokuapp.com/");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/business-list/");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(BlistImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Main Page");
  const [flipper_key2, setFlipper_key2] = useState(BlistImg2);
  const [flipper_key2Alt, setFlipper_key2Alt] = useState("Fast craigslist web scraper");
  const [flipper_key3, setFlipper_key3] = useState(BlistImg3);
  const [flipper_key3Alt, setFlipper_key3Alt] = useState("Filter your searches");
  const [flipper_key4, setFlipper_key4] = useState(BlistImg4);
  const [flipper_key4Alt, setFlipper_key4Alt] = useState("A much sexier front-end to craigslist");

  const [skillsTable, setSkillsTable] = useState([
    "Web Design",
    "Web Application",
    "API",
    "Flexbox",
    "eCommerce Website",
    "Django",
    "CSS Grid",
    "PgAdmin(PostgreS)",
  ]);
  const [skillsTable2, setSkillsTable2] = useState(["Databases", "Heroku", "MaterializeCss", "Beautifulsoup4", "web scraping"]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(BlistImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Main Page");
  const [flipper_image2, setFlipper_image2] = useState(BlistImg2);
  const [flipper_image2Alt, setFlipper_image2Alt] = useState("Fast craigslist web scraper");
  const [flipper_image3, setFlipper_image3] = useState(BlistImg3);
  const [flipper_image3Alt, setFlipper_image3Alt] = useState("Filter your searches");
  const [flipper_image4, setFlipper_image4] = useState(BlistImg4);
  const [flipper_image4Alt, setFlipper_image4Alt] = useState("A much sexier front-end to craigslist");

  const [projectDescriptions, setProjectDescriptions] = useState(
    "This is a Craigslist app clone. We used in this project some Python skills and the end result instead of something looking not very pretty... it's instead A much sexier Front-end."
  );

  // // If user scrolls down then assets animations start
  // function secondaryAssets() {
  //   if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
  //     assetsTransitions(projectName);
  //   } else {
  //     assetsTransitionsReset(projectName);
  //   }
  // }

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
        skillsTable2={skillsTable2}
      />
    </div>
  );
}

export default Business_list;
