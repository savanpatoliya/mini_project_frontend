import React from 'react'
import { useDashboradContext } from '../../context/dashboard_context'
import ListTask from './ListTask';



const ListProjectTask = () => {
    const {handleDisplayMember, handleCloseCreateTask} = useDashboradContext();
  return (
    <>
        <div style={{ height: "10%" }}>
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>Task List</div>
            <div>
              <button type="button" class="btn btn-outline-danger" onClick={handleDisplayMember}>
                Close
              </button>
            </div>
          </div>
        </div>
        <div className=" nopadding" style={{ height: "80%" }}>
          <table class="table">
            <thead>
              <tr style={{background:"#e7e8ea"}}>
                <th className="col-lg-1">ID</th>
                <th className="col-lg-3">Task Name</th>
                <th className="col-lg-3">Task Type</th>
                <th className="col-lg-2">Task Status</th>
                {/* <th className="col-lg-1">Task</th> */}
                <th className="col-lg-3">Action</th>
              </tr>
            </thead>
            <ListTask/>
          </table>
        </div>
    </>
  )
}

export default ListProjectTask