import React from "react";
import "../css/projects.css"; 
import img1 from "../images/ordermanagement.png";
import screenshot2 from "../images/screenshot2.png"
import university from "../images/university.png";

const Projects = () => {
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light" id="h1">
              Projects
            </h1>
            <p className="lead text-muted">
              These are my projects from the previous year, and I will continue to create more.
            </p>
            <p>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                  <img className="project-img" src={img1} alt="order-management"  />
                <div className="card-body">
                  <p className="card-text">
                    PHP Order Management System
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                      <a href="http://rjlordering.great-site.net/" target="_blank">Demo</a>
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                      <a href="https://github.com/ralphjenrey/IPT2ndYearProject" target="_blank">GitHub</a>
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="project-img" src={screenshot2} alt='Project' />
                <div className="card-body">
                  <p className="card-text">
                    Java Swing Simple Order and Queue System
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                      <a href="https://github.com/ralphjenrey/DSJavaProject2ndYear" target="_blank">GitHub</a>
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img className="project-img" src={university} alt='Project' />
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  
                

                <div className="card-body">
                  <p className="card-text">
                  University Landing Page
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                      <a href="https://ralphjenrey.github.io/ralphcecschool/" target="_blank">Demo</a>
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                      <a href="https://github.com/ralphjenrey/ralphcecschool" target="_blank">GitHub</a>
                      </button>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

    
 <div className="col">
              <div className="card shadow-sm">
                <img className="project-img" src="https://github.com/ralphjenrey/eCommerce/blob/main/src/assets/Screenshot%202023-11-24%20162238.png?raw=true" alt='Project' />
                <div className="card-body">
                  <p className="card-text">
                    Ecommerce with Firebase
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                      <a href="https://github.com/ralphjenrey/eCommerce" target="_blank">GitHub</a>
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img className="project-img" src="https://raw.githubusercontent.com/ralphjenrey/react-js-ralphLibary/main/sample%20screenshots/Screenshot%202024-01-01%20202404.png?token=GHSAT0AAAAAACLDWKLYDZE2A4HTGA6572G4ZMS5NXA" alt='Project' />
                <div className="card-body">
                  <p className="card-text">
                    React Js Library Management System
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                      <a href="https://github.com/ralphjenrey/react-js-ralphLibary" target="_blank">GitHub</a>
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

           
                    
               
                
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
