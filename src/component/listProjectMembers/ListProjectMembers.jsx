import React from 'react'
import { useDashboradContext } from '../../context/dashboard_context'
import ListMember from './ListMember'

const ListProjectMembers = () => {
    const {handleDisplayMember} = useDashboradContext();
  return (
    <>
        <div style={{ height: "10%" }}>
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>Project Details</div>
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
                <th className="col-lg-3">Member Name</th>
                <th className="col-lg-3">Member Email</th>
                <th className="col-lg-2">Member Password</th>
                <th className="col-lg-1">Task</th>
                <th className="col-lg-2">Action</th>
              </tr>
            </thead>
            <ListMember/>
          </table>
        </div>
    </>
  )
}

export default ListProjectMembers