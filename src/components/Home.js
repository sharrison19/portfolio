import React from "react";
import profilePicture from "../images/profilepicture.jpg";
import Pulse from "react-reveal/Pulse";

const Home = () => {
  return (
    <div name="homeSection" className="home-container">
      <Pulse>
        <img src={profilePicture} alt="Profile" className="profile-image" />
      </Pulse>
      <div className="home-text-container">
        <h2 className="home-heading">Welcome!</h2>
        <p className="home-introduction">
          Hi, I'm <span className="heading-name">Sean Harrison</span>, a
          passionate web developer with a passion for building modern and
          user-friendly web applications. I love turning creative ideas into
          functional and visually appealing websites using the latest web
          technologies.
        </p>
        <p className="home-introduction">
          Explore my portfolio to see some of the exciting projects I've worked
          on and feel free to contact me for any opportunities or
          collaborations.
        </p>
        <p className="home-create">Let's create something amazing together!</p>
      </div>
    </div>
  );
};

export default Home;
