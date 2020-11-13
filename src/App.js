import React, { useEffect } from "react";
import "./App.css";
import Intro from "./Intro";
import Imobile from "./Imobile";
import Business_list from "./Business_list";
import Portfolio_template from "./Portfolio_template";
import TodoListAppDj from "./TodoListAppDj";
import MylilMarket from "./MylilMarket";
import BlackJackRPS from "./BlackJackRPS";
import InstagramClone from "./InstagramClone";
import FBMessengerClone from "./FBMessengerClone";
import NetflixClone from "./NetflixClone";
import ResponsiveDesignPractice from "./ResponsiveDesignPractice";
import HazelAi from "./HazelAi";
import AmazonClone from "./AmazonClone";
import TinderClone from "./TinderClone";
import TikTokClone from "./TikTokClone";
import YoutubeClone from "./YoutubeClone";
import SpotifyClone from "./SpotifyClone";
import VariousPyProjects from "./VariousPyProjects";
import MyOtherProjects from "./MyOtherProjects";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="app">
      <Intro />
      <YoutubeClone />
      <AmazonClone />
      <Imobile />
      <TikTokClone />
      <NetflixClone />
      <InstagramClone />
      <Business_list />
      <Portfolio_template />
      <ResponsiveDesignPractice />
      <TodoListAppDj />
      <MylilMarket />
      <HazelAi />
      <FBMessengerClone />
      <BlackJackRPS />
      <TinderClone />
      <SpotifyClone />
      <VariousPyProjects />
      <MyOtherProjects />
      <Footer />
    </div>
  );
}

export default App;
