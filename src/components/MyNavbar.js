import React from "react";
import initials from "../images/initials.jpg";

function MyNavbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={initials} alt="initials" className="navbar-brand" />
        <ul className="navbar-links">
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
