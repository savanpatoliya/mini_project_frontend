import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDashboradContext } from '../../context/dashboard_context';


const EditTask = () => {
  const {  taskId, handleEditTask} = useDashboradContext();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("backlog");
  const [taskType, setTaskType]  = useState("task");
  const [desc, setDesc] = useState("");


    const getSpecificData = async() => {
        try{
            const res = await axios.post("/api/v1/dashboard/getSpecificTask", {taskId}, {
              withCredentials: true
            });
            
            setName(res.data.task.name);
            setStatus(res.data.task.status);
            setTaskType(res.data.task.taskType);
            setDesc(res.data.task.desc);
        } 
        catch(err){
          console.log(err);
        }
    }
    useEffect(() => {
        getSpecificData();
    }, [])


    const updateTask = async() => {
        try{
            const res = await axios.post("/api/v1/dashboard/updateTask", {name, taskId, status, taskType, desc}, {
                withCredentials: true
            })

            if(res.data.valid){
              handleEditTask();
            }
        }
        catch(err){
            console.log(err);   
        }
    }
    
    
    return (
      <>
        <div className="container w-50 my-3" style={{ height: "85%" }}>
        <div className style={{ height: "10%" }}>
          <h1>Edit Task</h1>
        </div>
        <div className style={{ height: "90%" }}>
          <form>
            <div className="form-group my-3">
              <label for="taskName">Task Name</label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                placeholder="Enter Your Task name eg:OpTask"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
            </div>
            <div class="form-group my-3">
              <label for="taskType">Task Type</label>
              <select class="form-control" id="taskType" onChange={(e) => {setTaskType(e.target.value)}} value={taskType}>
                <option value="task">Task</option>
                <option value="bug">Bug</option>
                <option value="error">Error</option>
                <option value="issue">Issue</option>
                <option value="deployment">Deployment</option>
              </select>
            </div>
            <div class="form-group my-3">
              <label for="taskStatus">Task Status</label>
              <select class="form-control" id="taskStatus" onChange={(e) => {setStatus(e.target.value)}} value={status}>
                <option value="backlog">Backlog</option>
                <option value="selected for development">Selected for development</option>
                <option value="in progress">In progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div className="form-group my-3">
              <label for="Description">Description</label>
              <textarea
                className="form-control"
                id="Description"
                rows="8"
                style={{ resize: "none" }}
                value={desc}
                onChange={(e) => {setDesc(e.target.value)}}
              ></textarea>
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                onClick={handleEditTask}
              >
                Close
              </button>
              <button type="button" class="btn btn-outline-success btn-sm" onClick={updateTask}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      </>
    )
}

export default EditTask