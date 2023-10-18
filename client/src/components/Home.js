import React from "react";
import "../css/home.css";
import photo from "../images/img3.png"
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  return (
    <div className="container home">
      <div className="row align-middle">
        <div className="col-md-6" id="middle">
          <div className="left text-white">
            <span id="greetings">Hello, I am</span>
            <h1 id="name">Ralph <span>Jenrey</span></h1>
            <h3>Full Stack Developer</h3>
          </div>
          <div className="d-block left">
            <Link to="/contact">
            <button className="btn btn-lg mr-3 btn-m home-btn">
              Hire Me
            </button>
            </Link>
            <Link to="/projects">
            <button className="btn btn-secondary btn-lg">Projects</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img id="image" className="img-fluid" src={photo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
