import React from "react";
import "./CreatorDashboard.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import List from "../List";
import { useDashboradContext } from "../../context/dashboard_context";

const CreatorDashboard = () => {
  const {projects} = useDashboradContext(); 
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
        <div style={{ height: "10%" }}>
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>LIST PROJECT</div>
            <div>
              <button type="button" class="btn btn-outline-primary">
                Add New
              </button>
            </div>
          </div>
        </div>
        <div className=" nopadding" style={{ height: "80%" }}>
          <table class="table">
            <thead>
              <tr style={{background:"#e7e8ea"}}>
                <th className="col-lg-1">ID</th>
                <th className="col-lg-3">Project Name</th>
                <th className="col-lg-3">Project Category</th>
                <th className="col-lg-2">Creator</th>
                <th className="col-lg-1">Member</th>
                <th className="col-lg-2">Action</th>
              </tr>
            </thead>
            <List/>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
