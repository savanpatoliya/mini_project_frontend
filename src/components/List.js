import React, { useEffect } from 'react'
import { useDashboradContext } from '../context/dashboard_context';
import axios from 'axios';

const List = () => {
  const {projects, setProjects} = useDashboradContext();
  useEffect(() => {
    axios.get('/api/v1/dashboard/getUser', {
      withCredentials: true
    })
          .then((response) => {
            // console.log("data", data);
            console.log("got", response);
            // if()
            if(response.data.projects.length !== 0){
              setProjects(response.data.projects);
            }
          }, (error) => {
            console.log("here in error");
            console.log(error);
          });
  }, [])
  return (
    
   <>
   {
    projects && 
  
      
      projects.map((project, index) => {
        return (<tbody>
                        <tr>
                          
                          <th className="col-lg-1" style={{verticalAlign:"middle"}}>{index+1}</th>
                          <td className="col-lg-3" style={{verticalAlign:"middle"}}>{project.name}</td>
                          <td className="col-lg-3" style={{verticalAlign:"middle"}}>{project.category}</td>
                          <td className="col-lg-2" style={{verticalAlign:"middle"}}>
                          <button type="button" class="btn btn-outline-success btn-sm">{project.creaters[0].name}</button>
                          </td>
                          <td className="col-lg-1" style={{verticalAlign:"middle"}}>
                        
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

export default List