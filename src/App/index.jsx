import React, { useEffect } from "react";
import "./App.css";
import projects from "../projects.json";
import Intro from "../Components/Intro";
import HazelAi from "../Components/HazelAi";
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
        projects.map((project) =>
          project.projectName === "hazel_ai" ? (
            // TODO remove and render a normal Page component as the other Pages if possible
            <HazelAi key={project.projectName} project={project} />
          ) : (
            <div>
              <Page key={project.projectName} project={project} />
            </div>
          )
        )}
      <VariousPyProjects />
      <MyOtherProjects />
      <Footer />
    </div>
  );
}

export default App;
