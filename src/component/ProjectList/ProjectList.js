import React from 'react'
import { useDashboradContext } from '../../context/dashboard_context'
import List from './List'

const ProjectList = () => {
    const {handleCreateProject} = useDashboradContext();
  return (
    <>
        <div style={{ height: "10%" }}>
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>LIST PROJECT</div>
            <div>
              <button type="button" class="btn btn-outline-primary" onClick={handleCreateProject}>
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
    </>
  )
}

export default ProjectList