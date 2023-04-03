import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDashboradContext } from '../../context/dashboard_context';

const EditProject = () => {
    const { handleEditProjectFlag, projects, projectId} = useDashboradContext();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");

    const getSpecificData = () => {
        console.log("in use effect edit project");
        console.log(projects);
        projects.map((p) => {
            if(p._id == projectId){
                setName(p.name);
                setCategory(p.category);
                setDesc(p.desc);
            }
        })
    }
    useEffect(() => {
        getSpecificData();
    }, [])


    const editProject = async() => {
        try{
            const res = await axios.post("/api/v1/dashboard/updateProject", {projectId, name, category, desc}, {
                withCredentials: true
            })

            console.log()

            handleEditProjectFlag();
        }
        catch(err){
            console.log(err);   
        }
    }
    
    
    return (
      <>
        <div
          className="container w-50 my-3"
          style={{  height: "85%" }}
        >
          <div className style={{ height: "10%" }}>
            <h1>Edit Project</h1>
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
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                />
              </div>
  
              <div className="form-group my-3">
                <label for="Category" >Project Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="Category"
                  placeholder="Enter Project's Category eg:Machine Learning"
                value={category}
                onChange={(e) => {setCategory(e.target.value)}}
                />
              </div>
  
  
              <div className="form-group my-3">
                <label for="Description">Description</label>
                <textarea
                  className="form-control"
                  id="Description"
                  rows="10"
                  style={{resize:"none"}}
                  value={desc}
                  onChange={(e) => {setDesc(e.target.value)}}
                
                ></textarea>
              </div>
              <div className="d-flex justify-content-between">
              <button type="button" class="btn btn-outline-danger btn-sm" onClick={handleEditProjectFlag}>Close</button>
              <button type="button" class="btn btn-outline-success btn-sm" onClick={editProject}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}

export default EditProject