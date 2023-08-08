import React from "react";
import { Link } from "react-router-dom";
import initials from "../images/initials.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MyNavbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <img src={initials} alt="initials" className="navbar-brand" />
          </Link>
          <ul className="navbar-links">
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="social-icons">
            <a
              href="https://github.com/sharrison19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/sean-j-harrison/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
