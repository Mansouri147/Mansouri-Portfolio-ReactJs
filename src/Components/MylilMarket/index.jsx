import React, { useState } from "react";
import Page from "../Page";
import MylilMImg1 from "../../static/images/my_little_market/django_admin_main_page.jpg";
import MylilMImg2 from "../../static/images/my_little_market/django_admin_products_page.jpg";
import MylilMImg3 from "../../static/images/my_little_market/My_Little_Market.jpg";

function MylilMarket() {
    // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("my_little_market");

  const [title, setTitle] = useState("Portfolio Template 'Sundays ONLY'");
  const [subtitle1, setSubtitle1] = useState("Django Back-End administrative part E-commerce template My little Market for preview see the link below");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://carrefour-express.herokuapp.com/");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/My_little_Market_Sundays_ONLY");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(MylilMImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Admin Main Page");
  const [flipper_key2, setFlipper_key2] = useState(MylilMImg2);
  const [flipper_key2Alt, setFlipper_key2Alt] = useState("Admin Products Page");
  const [flipper_key3, setFlipper_key3] = useState(MylilMImg3);
  const [flipper_key3Alt, setFlipper_key3Alt] = useState("Front-End");

  const [skillsTable, setSkillsTable] = useState([
    "PipEnv",
    "eCommerce",
    "Django",
    "Flexbox",
    "SQLite",
    "Databases",
    "Web Design",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(MylilMImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Admin Main Page");
  const [flipper_image2, setFlipper_image2] = useState(MylilMImg2);
  const [flipper_image2Alt, setFlipper_image2Alt] = useState("Admin Products Page");
  const [flipper_image3, setFlipper_image3] = useState(MylilMImg3);
  const [flipper_image3Alt, setFlipper_image3Alt] = useState("Front-End");

  const [projectDescriptions, setProjectDescriptions] =
    useState("Django administrative part E-commerce template \"My little Market\" is about admn's deleting and adding new products without coding... by adding \"/admin\" to the top url you gain access to the admin's login page,and of course with some chic Front-End.");

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

export default MylilMarket;
