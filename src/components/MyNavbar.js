import React from "react";
import initials from "../images/initials.jpg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MyNavbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="homeSection" smooth={true} offset={50} duration={500}>
            <img src={initials} alt="initials" className="navbar-brand" />
          </Link>
          <ul className="navbar-links">
            <li className="nav-item">
              <Link to="aboutSection" smooth={true} offset={-80} duration={400}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projectsSection"
                smooth={true}
                offset={-80}
                duration={400}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contactSection"
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
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
