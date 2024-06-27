import React from "react";
import "./../../static/css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a href="/" className="navbar-logo"></a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#service" className="navbar-link">
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;