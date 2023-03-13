import React from "react";
import "./SideNavbar.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SideNavbar = () => {
  return (
    <div className="row nopadding">
      <div className="sidebar col-auto col-lg-2">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-envelope"></i>Kanban Board
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-gear"></i>Project Manager
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-circle-plus"></i>Create Project
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-project-diagram"></i>portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-blog"></i>Blogs
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-address-book"></i>Contact
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-map-pin"></i>Map
            </a>
          </li>
        </ul>
        {/* <div className="social_media">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
      </div>
    
    </div>
  );
};

export default SideNavbar;
