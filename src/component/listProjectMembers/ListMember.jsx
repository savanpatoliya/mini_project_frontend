import React, {useEffect} from 'react'
import axios from 'axios';
import { useDashboradContext } from '../../context/dashboard_context';

const ListMember = () => {
  const {members, setMembers, projectId, changeMemberId, handleCloseDisplayTask, handleAssignTaskFlag, memberId, handleEditMemberFlag} = useDashboradContext();
  useEffect(() => {
    console.log("hello from list member compo");
    console.log("here is :" + projectId)
    axios.post('/api/v1/dashboard/getMembers', {projectId},{
      withCredentials: true
    })
          .then((response) => {
            // console.log("data", data);
            console.log("in members got", response);
            // if()
            // if(response.data.members.length !== 0){
              setMembers(response.data.members);
            // }
          }, (error) => {
            console.log("here in error");
            console.log(error);
          });
  }, [])



  


  const callApiDeleteMember = async(projectId,memberId) => {
    try{
      console.log("here in call api");
      console.log(projectId)
      const res = await axios.post(`/api/v1/dashboard/deleteMember`,{
        memberId,
        projectId
      } ,{
        withCredentials:true,
      })

      const data = await axios.post("/api/v1/dashboard/getMembers", {projectId}, {withCredentials: true});
      // console.log("got data in delete : " + data.data);
      setMembers(data.data.members);

      

    }
    catch(err){
      console.log(err);
    }
  }

  const deleteMember = (projectId, memberId) => {
    // changeProjectId(val);
    // console.log("hii from delete");
    
    callApiDeleteMember(projectId, memberId);
  }



  return (
    
   <>
   {
    members && 
  
      
    members.map((member, index) => {
        return (<tbody>
                        <tr>
                          
                          <th className="col-lg-1" style={{verticalAlign:"middle"}}>{index+1}</th>
                          <td className="col-lg-3" style={{verticalAlign:"middle",cursor:"pointer",color:"blue"}} onClick={() => {changeMemberId(member._id);handleCloseDisplayTask();}}>{member.name}</td>
                          <td className="col-lg-3" style={{verticalAlign:"middle"}}>{member.email}</td>
                          <td className="col-lg-2" style={{verticalAlign:"middle"}}>
                          {member.email}
                          </td>
                          <td className="col-lg-1" style={{verticalAlign:"middle"}}>
                          <i className="fas fa-circle-plus fa-2x" onClick={() => {changeMemberId(member._id);handleAssignTaskFlag()}}></i>
                          </td>
                          <td className="col-lg-2">
                            <div className="d-flex justify-content-between w-75">
                              <button
                                type="button"
                                class="btn btn-outline-secondary btn-sm"
                                onClick={(e) => {changeMemberId(member._id);
                                  handleEditMemberFlag();
                                }}
                              >
                                Edit
                              </button>
                              <button type="button" class="btn btn-outline-danger btn-sm" onClick={
                                () => {
                                  changeMemberId(member._id)
                                  deleteMember(projectId, member._id)
                                }
                              }>
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>)
      })
    
  }
   </>
  )
}

export default ListMember