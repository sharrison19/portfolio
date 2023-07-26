import React from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
};

export default App;
