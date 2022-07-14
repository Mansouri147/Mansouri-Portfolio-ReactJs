import React, { useEffect } from "react";
import "./App.css";
import projects from "../projects.json";
import Intro from "../Components/Intro";
import ResponsiveDesignPractice from "../Components/ResponsiveDesignPractice";
import HazelAi from "../Components/HazelAi";
import TinderClone from "../Components/TinderClone";
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
      {projects.length > 0 &&
        projects.map((project) => (
          <div>
            <Page key={project.projectName} project={project} />
          </div>
        ))}
      <ResponsiveDesignPractice />
      <HazelAi />
      <TinderClone />
      <SpotifyClone />
      <VariousPyProjects />
      <MyOtherProjects />
      <Footer />
    </div>
  );
}

export default App;
