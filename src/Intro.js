import React, { useEffect, useState } from "react";
import "./Intro.scss";
import scrollPic from "./static/images/scroll.svg";
import profilePic from "./static/images/PhotTo.jpg";
import asset1 from "./static/images/illustrator_pics/Asset 4@4x.png";
import asset2 from "./static/images/illustrator_pics/Asset 3@4x.png";
import asset3 from "./static/images/illustrator_pics/Asset 2@4x.png";
import frontEndLogo from "./static/images/projects_titles_backgrounds/logos/Front-End.png";
import machineLearningLogo from "./static/images/projects_titles_backgrounds/logos/machine-learning-deep-learning-artificial-intellig-ai-.png";
import djangoLogo from "./static/images/projects_titles_backgrounds/logos/django2.png";
import webScrapingLogo from "./static/images/projects_titles_backgrounds/logos/web-scraping.png";
import javaScriptLogo from "./static/images/projects_titles_backgrounds/logos/JavaScript_logo.png";
import dataScienceLogo from "./static/images/projects_titles_backgrounds/logos/Data_Science.png";
import frontEndBg from "./static/images/projects_titles_backgrounds/front-end_resized.jpg";
import SophiaAiBg from "./static/images/projects_titles_backgrounds/artificial_intelligence.jpg";
import djangoBg from "./static/images/projects_titles_backgrounds/django.jpg";
import webScrapingBg from "./static/images/projects_titles_backgrounds/web_scraping.jpg";
import JavaScriptBg from "./static/images/projects_titles_backgrounds/Javascript_background.jpg";
import dataScienceBg from "./static/images/projects_titles_backgrounds/data_science.jpg";
import ProjectsItem from "./ProjectsItem";

function Intro() {
  const [frontEndProjects, setFrontEndProjects] = useState([{
    projectInfos: [{ name: "Imobile Shop", href: ".imobile-page" }],
    projectInfos: [{ name: "Portfolio template", href: ".portfolio_template-page" }],
    projectInfos: [{ name: "Responsive Design Practice", href: ".responsive_design-page" }],
  }]);

  const [machineLearningProjects, setMachineLearningProjects] = useState([{ projectInfos: [{ name: "Hazel AI", href: ".hazel_ai-page" }] }]);

  const [backEndProjects, setBackEndProjects] = useState([{
    projectInfos: [{ name: "My Little Market", href: ".my_little_market-page" }],
    projectInfos: [{ name: "Todo List app", href: ".todo_list-page" }],
  }]);

  const [webScrapingProjects, setWebScrapingProjects] = useState([{
    projectInfos: [{ name: "Business list", href: ".business_list-page" }],
    projectInfos: [{ name: "Weather Scraper", href: ".various_py_projects-page" }],
    projectInfos: [{ name: "Amazon Price Tracker (done deployement soon)", href: "" }],
  }]);

  const [javaScriptProjects, setJavaScriptProjects] = useState([{
    projectInfos: [{ name: "Javascript: Blackjack - Rock Paper Scissors", href: ".blackjack_rps_js-page" }],
    projectInfos: [{ name: "Instagram clone ReactJs", href: ".instagram_clone-page" }],
    projectInfos: [{ name: "Facebook Messenger clone ReactJs", href: ".fb_messenger_clone-page" }],
    projectInfos: [{ name: "Netflix clone ReactJs", href: ".netflix_clone-page" }],
    projectInfos: [{ name: "Amazon clone ReactJs", href: ".amazon_clone-page" }],
    projectInfos: [{ name: "Tinder clone ReactJs ( Under Dev )", href: ".tinder_clone-page" }],
    projectInfos: [{ name: "Youtube clone ReactJs (LIVE DEMO soon)", href: ".youtube_clone-page" }],
    projectInfos: [{ name: "Spotify clone ReactJs (LIVE DEMO soon)", href: ".spotify_clone-page" }],
  }]);

  const [dataScienceProjects, setDataScienceProjects] = useState([{
    projectInfos: [{ name: "Process workbook-Edting Excel files", href: ".various_py_projects-page" }],
  }]);

  return (
    <div>
      <div className="page1">
        <h1 className="title">Ala Mansouri</h1>
        <div className="pic-container">
          <img className="profile-pic" src={profilePic} alt="" />
        </div>
        <h3 className="title-desc1">SOFTWARE DEVELOPER</h3>
        <h5 className="title-desc2">Python | Software | Web | Django | JavaScript | React-Js| React-Router | Front-End | Back-End | SQLite </h5>
        <img src={scrollPic} alt="scroll down" className="scroll" />
        {/* <!--<h5 className="title-desc3" >I'm 22 years old and I have a clear work ethic, eager to grow both personally and professionally, to give the best of me.</h5>--> */}
        <thing className="linear" data-aos="fade-in" data-aos-offset="10" data-aos-duration="300"></thing>
      </div>

      <div className="page2">
        <div className="first-assets">
          <ul data-aos="fade-right" data-aos-duration="1000">
            <li className="asset1">
              <img src={asset1} alt="" />
            </li>
            <li className="asset2">
              <img src={asset2} alt="" />
            </li>
            <li className="asset3">
              <img src={asset3} alt="" />
            </li>
          </ul>
        </div>
        <h1 className="projects-title">
          <span>My Projects</span> dashboard
        </h1>
        <div className="projects">
          <ul className="projects-list">
            <ProjectsItem background={frontEndBg} logo={frontEndLogo} projectsItemTitle="Front-End" projects={frontEndProjects} />
            <ProjectsItem
              background={SophiaAiBg}
              logo={machineLearningLogo}
              projectsItemTitle="Machine Learning"
              projects={machineLearningProjects}
            />
            <ProjectsItem background={djangoBg} logo={djangoLogo} projectsItemTitle="Back-End" projects={backEndProjects} />
            <ProjectsItem background={webScrapingBg} logo={webScrapingLogo} projectsItemTitle="web-scraping" projects={webScrapingProjects} fadeOut />
            <ProjectsItem background={JavaScriptBg} logo={javaScriptLogo} projectsItemTitle="JavaScript" projects={javaScriptProjects} fadeOut />
            <ProjectsItem background={dataScienceBg} logo={dataScienceLogo} projectsItemTitle="Data-science" projects={dataScienceProjects} />

            {/* <li>Tic Tac Toe py-logo</li> */}
          </ul>
        </div>
        <div className="sayings_background">
          <div className="sayings">
            <p>
              A big programmer once said : when somebody builds a project... mostly that project is a reflection of how he thinks , that means part of
              his thinking... part of his mind hence why everything in it is important 'cause it's a part of his mind.
              <br />
              <span>Rafeh Qazi...</span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
