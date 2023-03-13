import React, {useEffect} from 'react'
import axios from 'axios';
import { useDashboradContext } from '../../context/dashboard_context';

const ListMember = () => {
  const {members, setMembers, projectId} = useDashboradContext();
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
            if(response.data.members.length !== 0){
              setMembers(response.data.members);
            }
          }, (error) => {
            console.log("here in error");
            console.log(error);
          });
  }, [])
  return (
    
   <>
   {
    members && 
  
      
    members.map((member, index) => {
        return (<tbody>
                        <tr>
                          
                          <th className="col-lg-1" style={{verticalAlign:"middle"}}>{index+1}</th>
                          <td className="col-lg-3" style={{verticalAlign:"middle",cursor:"pointer",color:"blue"}}>{member.name}</td>
                          <td className="col-lg-3" style={{verticalAlign:"middle"}}>{member.email}</td>
                          <td className="col-lg-2" style={{verticalAlign:"middle"}}>
                          {member.email}
                          </td>
                          <td className="col-lg-1" style={{verticalAlign:"middle"}}>
                          <i className="fas fa-circle-plus fa-2x"></i>
                          </td>
                          <td className="col-lg-2">
                            <div className="d-flex justify-content-between w-75">
                              <button
                                type="button"
                                class="btn btn-outline-secondary btn-sm"
                              >
                                Edit
                              </button>
                              <button type="button" class="btn btn-outline-danger btn-sm">
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