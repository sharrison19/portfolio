import React from "react";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import MyNavbar from "./components/MyNavbar";
import MainContent from "./components/MainContent";
import projectsData from "./data/projectsData";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MainContent projectsData={projectsData} />} />
        <Route
          path="/projects/:projectId"
          element={<Project projectsData={projectsData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
