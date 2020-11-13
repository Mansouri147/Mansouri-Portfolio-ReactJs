import React, { useState } from "react";
import Page from "../Page";
import NetflixCImg1 from "../../static/images/netflix-clone/netflix_clone-Main_image.jpg";
import NetflixCImg2 from "../../static/images/netflix-clone/netflix_clone-posters.jpg";

function NetflixClone() {
  // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("netflix_clone");

  const [title, setTitle] = useState("Netflix clone ReactJs");
  const [secondTitle, setSecondTitle] = useState(
    "Netflix clone, click any Poster from netflix originals to watch the trailer. With React as Front-End and google firebase one of the easiest and most proficient Back-End"
  );

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://netflix-clone-11686.web.app/");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/Netflix-Clone");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(NetflixCImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Netflix Main Banner");
  const [flipper_key2, setFlipper_key2] = useState(NetflixCImg2);
  const [flipper_key2Alt, setFlipper_key2Alt] = useState("Movie trailers");

  const [skillsTable, setSkillsTable] = useState([
    "ReactJs",
    "Firebase (hosting, database)",
    "Cloud Functions",
    "Flexbox",
    "React-youtube lib",
    "movie-trailer lib",
    "3rd Party: UseState and UseEffect hooks",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(NetflixCImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Admin Main Page");
  const [flipper_image2, setFlipper_image2] = useState(NetflixCImg2);
  const [flipper_image2Alt, setFlipper_image2Alt] = useState("Admin Products Page");

  const [projectDescriptions, setProjectDescriptions] = useState(
    "Netflix clone you can click any Poster from the netflix originals to watch any trailer you want with React as Front-End and google firebase one of the easiest and most proficient Back-End"
  );

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

export default NetflixClone;
