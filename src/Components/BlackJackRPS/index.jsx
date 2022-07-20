import React, { useState } from "react";
import Page from "../Page";
import BRImg1 from "../../static/images/blackjack_rps_js/BlackJack_winner.jpg";
import BRImg2 from "../../static/images/blackjack_rps_js/javascript_backJack_main.jpg";
import BRImg3 from "../../static/images/blackjack_rps_js/BlackJack_winner_whole.jpg";

function BlackJackRPS() {
  // This name will be used in production like css and javascript
  const [projectName, setProjectNameconst] = useState("blackjack_rps_js");

  const [title, setTitle] = useState("BlackJack Game, Rock Paper Scissors... and more 'n more practice JavaScript");
  const [subtitle1, setSubtitle1] = useState("This project has 71% of bare JavaScript code and only 21% HTML, CSS8% according to GitHub");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://javascript-crashcourse.herokuapp.com");
  const [githubRepoUrl, setGithubRepoUrl] = useState("https://github.com/Mansouri147/BlackJack-Game-Rock-Paper-Scissors...-and-some-messing-arround-with-JavaScript");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(BRImg1);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Full BlackJack Game logic with JS");
  const [flipper_key2, setFlipper_key2] = useState(BRImg2);
  const [flipper_key2Alt, setFlipper_key2Alt] = useState("JavaScript Fundamentals");
  const [flipper_key3, setFlipper_key3] = useState(BRImg3);
  const [flipper_key3Alt, setFlipper_key3Alt] = useState("All you need to start having results with javascript code");

  const [skillsTable, setSkillsTable] = useState(["JavaScript", "Bootstrap", "Adobe Photoshop", "Flexbox"]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(BRImg1);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Admin Main Page");
  const [flipper_image2, setFlipper_image2] = useState(BRImg2);
  const [flipper_image2Alt, setFlipper_image2Alt] = useState("Admin Products Page");
  const [flipper_image3, setFlipper_image3] = useState(BRImg3);
  const [flipper_image3Alt, setFlipper_image3Alt] = useState("Front-End");

  const [projectDescriptions, setProjectDescriptions] = useState("Brought to you by CleverProgrammer all big respects. thanks to Rafeh qazy, Aaron and all big team in CleverProgrammer");

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
        cleverProgUrl
      />
    </div>
  );
}

export default BlackJackRPS;
