import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Project from "./components/Project";
import MyNavbar from "./components/MyNavbar";
import projectsData from "./data/projectsData";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <MyNavbar />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="/projects"
          element={<Projects projectsData={projectsData} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/projects/:projectId"
          element={<Project projectsData={projectsData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
