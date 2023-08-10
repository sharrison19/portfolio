import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import initials from "../images/initials2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FiMenu } from "react-icons/fi";

function MyNavbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = () => {
    if (menuOpen) {
      closeMenu();
    }
  };

  return (
    <>
      {windowWidth <= 650 ? (
        <nav className="navbar">
          <div className="nav-container">
            <div className="hamburger-menu">
              <input
                type="checkbox"
                id="hamburger-toggle"
                checked={menuOpen}
                onChange={toggleMenu}
              />
              <label htmlFor="hamburger-toggle" className="hamburger-icon">
                <FiMenu />
              </label>
              <div
                className={`hamburger-content ${menuOpen ? "open" : ""}`}
                onClick={handleNavigation}
              >
                <ul className="hamburger-nav">
                  <li className="hamburger-nav-item">
                    <Link to="/">
                      <img
                        src={initials}
                        alt="initials"
                        className="navbar-initials"
                      />
                    </Link>
                  </li>
                  <li className="hamburger-nav-item">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="hamburger-nav-item">
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li className="hamburger-nav-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hamburger-nav-right">
              <div className="hamburger-social-icons">
                <a
                  href="https://github.com/sharrison19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sean-j-harrison/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-left">
              <Link to="/">
                <img
                  src={initials}
                  alt="initials"
                  className="navbar-initials"
                />
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
                  className="social-icon-link"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sean-j-harrison/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default MyNavbar;
