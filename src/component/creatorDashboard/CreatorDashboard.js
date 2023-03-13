import React from "react";
import "./creatorDashboard.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useDashboradContext } from "../../context/dashboard_context";
import ProjectList from "../ProjectList/ProjectList";
import CreateMemberDashboard from "../createMemberDashboard/CreateMemberDashboard";
import CreateProjectDashboard from "../createProjectDashboard/CreateProjectDashboard";

const CreatorDashboard = () => {
  const {createMemberFlag, createProjectFlag} = useDashboradContext(); 
  return (
    <div className="container">
      <div style={{ height: "100vh" }}>
        <div style={{ height: "10%" }}>
          <nav class="navbar navbar-light bg-light justify-content-between h-100">
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <a class="navbar-brand">Hii ! User</a>
          </nav>
        </div>
        {createMemberFlag ? <CreateMemberDashboard/>: (createProjectFlag ? <CreateProjectDashboard/> : <ProjectList/>)}
        
        
      </div>
    </div>
  );
};

export default CreatorDashboard;
