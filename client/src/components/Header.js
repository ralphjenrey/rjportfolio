// src/components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css"

const isActive = (path) => {
  const location = useLocation();
  return location.pathname === path ? "active" : "";
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-4">
      <div className="container">
        <a className="navbar-brand" href="/">
          &lt; r a l p h &#47; &gt;
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto z-index">
            <li className={`nav-item ${isActive("/") ? "active-link" : ""}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${isActive("/about") ? "active-link" : ""}`}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li
              className={`nav-item ${
                isActive("/contact") ? "active-link" : ""
              }`}
            >
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li
              className={`nav-item ${
                isActive("/projects") ? "active-link" : ""
              }`}
            >
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
