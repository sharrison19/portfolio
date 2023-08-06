import React from "react";
import { Element } from "react-scroll";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";

const MainContent = (props) => {
  return (
    <div>
      <Element name="homeSection" className="element">
        <Home />
      </Element>
      <Element name="aboutSection" className="element">
        <About />
      </Element>
      <Element name="projectsSection" className="element">
        <Projects projectsData={props.projectsData} />
      </Element>
      <Element name="contactSection" className="element">
        <Contact />
      </Element>
    </div>
  );
};

export default MainContent;
