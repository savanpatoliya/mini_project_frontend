import axios from "axios";
import React, { useState } from "react";
import { useDashboradContext } from "../../context/dashboard_context";

const CreateProjectDashboard = () => {
  const { handleCloseCreateProject } = useDashboradContext();
  const [projectName, setProjectName] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const handleCreateProject = async(e) => {
    e.preventDefault();

    try{
      const res = await axios.post("/api/v1/dashboard/createProject", {name:projectName, category: projectCategory, desc: projectDesc}, {
        withCredentials: true
      });
      

    }
    catch(err){
      console.log("err");

    }





    // on last
    handleCloseCreateProject(); 


  }
  return (
    <>
      <div
        className="container w-50 my-3"
        style={{  height: "85%" }}
      >
        <div className style={{ height: "10%" }}>
          <h1>Create Project</h1>
        </div>
        <div className style={{ height: "90%" }}>
          <form>
            <div className="form-group my-3">
              <label for="ProjectName" >Project Name</label>
              <input
                type="text"
                className="form-control"
                id="ProjectName"
                placeholder="Enter Your Project name eg:OpTask"
                value={projectName}
                onChange={(e) => {setProjectName(e.target.value)}}
              />
            </div>

            <div className="form-group my-3">
              <label for="Category" >Project Category</label>
              <input
                type="text"
                className="form-control"
                id="Category"
                placeholder="Enter Project's Category eg:Machine Learning"
                value={projectCategory}
                onChange={(e) => {setProjectCategory(e.target.value)}}
              />
            </div>


            <div className="form-group my-3">
              <label for="Description">Description</label>
              <textarea
                className="form-control"
                id="Description"
                rows="10"
                style={{resize:"none"}}
                value={projectDesc}
                onChange={(e) => {setProjectDesc(e.target.value)}}
              ></textarea>
            </div>
            <div className="d-flex justify-content-between">
            <button type="button" class="btn btn-outline-danger btn-sm" onClick={handleCloseCreateProject}>Close</button>
            <button type="button" class="btn btn-outline-success btn-sm" disabled={!projectName} onClick={handleCreateProject}>Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProjectDashboard;
