import React from "react";
import { Link } from "react-router-dom";
import initials from "../images/initials.jpg";

function MyNavbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
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
    </nav>
  );
}

export default MyNavbar;
