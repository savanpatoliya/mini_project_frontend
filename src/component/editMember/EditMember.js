import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDashboradContext } from '../../context/dashboard_context';

const EditMember = () => {
    const {handleCloseCreateMember, projectId, handleEditMemberFlag, members, memberId} = useDashboradContext();
    const [memberName, setMemberName] = useState("");
    const [memberEmail, setMemberEmail] = useState("");
    
    


    const getSpecificData = () => {
        
        members.map((m) => {
            if(m._id == memberId){
                setMemberName(m.name);
                setMemberEmail(m.email);
                
            }
        })
    }
    useEffect(() => {
        getSpecificData();
    }, [])



    const editMember = async() => {
        try{
            const res = await axios.post("/api/v1/dashboard/updateMember", {projectId, memberId, name: memberName, email: memberEmail, password: "temp123@gmail.com"}, {
                withCredentials: true
            })

            console.log()

            handleEditMemberFlag();
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
            <h1>Edit Member</h1>
          </div>
          <div className style={{ height: "90%" }}>
            <form>
            <div className="form-group my-3">
                <label for="MemberName" >Member Name</label>
                <input
                  type="Text"
                  className="form-control"
                  id="MemberName"
                  placeholder="Enter Member's Name"
                  value={memberName}
                  onChange={(e) => {setMemberName(e.target.value)}}
                />
              </div>
  
              <div className="form-group my-3">
                <label for="MemberEmail" >Member Email</label>
                <input
                  type="Email"
                  className="form-control"
                  id="MemberEmail"
                  placeholder="Enter Member's Email eg:Vatsal123@gmail.com"
                  value={memberEmail}
                  onChange={(e) => {setMemberEmail(e.target.value)}}
                />
              </div>
  
              {/* <div className="form-group my-3">
                <label for="MemberPassword" >Member Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="MemberPassword"
                  placeholder="Enter Member Password eg:Vatsal@123"
                  value={memberPassword}
                  onChange={(e) => {setMemberPassword(e.target.value)}}
                />
              </div> */}
  
              <div className="d-flex justify-content-between">
              <button type="button" class="btn btn-outline-danger btn-sm" onClick={handleEditMemberFlag}>Close</button>
              <button type="button" class="btn btn-outline-success btn-sm" onClick={editMember}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}

export default EditMember