import React, { useEffect } from "react";
import "./App.css";
import Intro from "../Components/Intro";
import Imobile from "../Components/Imobile";
import Business_list from "../Components/Business_list";
import Portfolio_template from "../Components/Portfolio_template";
import TodoListAppDj from "../Components/TodoListAppDj";
import MylilMarket from "../Components/MylilMarket";
import BlackJackRPS from "../Components/BlackJackRPS";
import InstagramClone from "../Components/InstagramClone";
import FBMessengerClone from "../Components/FBMessengerClone";
import NetflixClone from "../Components/NetflixClone";
import ResponsiveDesignPractice from "../Components/ResponsiveDesignPractice";
import HazelAi from "../Components/HazelAi";
import AmazonClone from "./Components/AmazonClone";
import TinderClone from "../Components/TinderClone";
import TikTokClone from "../Components/TikTokClone";
import YoutubeClone from "../Components/YoutubeClone";
import SpotifyClone from "../Components/SpotifyClone";
import VariousPyProjects from "../Components/VariousPyProjects";
import MyOtherProjects from "../Components/MyOtherProjects";
import Footer from "../Components/Footer";
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
