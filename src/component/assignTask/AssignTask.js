import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDashboradContext } from "../../context/dashboard_context";

const AssignTask = () => {
  const { handleCloseCreateTask, projectId, handleAssignTaskFlag, memberId} =
    useDashboradContext();
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskType, setTaskType] = useState("task type");
  const [status, setStatus] = useState("task status"); 
  const [taskName, setTaskName] = useState(null); 
  const [taskId, setTaskId] = useState(""); 

  const getAllTask = async() => {
    try{
        const res = await axios.post("/api/v1/dashboard/selectTask", {projectId, memberId}, {
            withCredentials: true,
        })

        setSelectedTask(res.data.tasks);
    }
    catch(err){
        console.log(err);
    }

  }

  const handleAssign = async(e) => {
    e.preventDefault();
    console.log(memberId);
    console.log(taskId);

    try{
        const res = await axios.post("/api/v1/dashboard/assignTask", {memberId, taskId}, {
            withCredentials: true
        })

        console.log(res);
        handleAssignTaskFlag();
    }
    catch(err){
        console.log(err);

    }

  }

  useEffect(() => {
    getAllTask();
  }, [])



  return (
    <>
    {
        selectedTask && 
    
      <div className="container w-50 my-3" style={{ height: "85%" }}>
        <div className style={{ height: "10%" }}>
          <h1>Assign Task</h1>
        </div>
        <div className style={{ height: "90%" }}>
          <form>
          <div className="form-group my-3">
              <label htmlFor="taskName">Task Name</label>
              <select
                className="form-select"
                id="taskName"
                onChange={(e) => {
                    if(e.target.value === "null"){
                        setTaskType("task type");
                        setStatus("task status");
                        setTaskName(null);
                        setTaskId(null);
                        return;
                    }
                    const temp = e.target.value.split(",");
                    setTaskType(temp[0]);
                    setStatus(temp[1]);
                    setTaskName(temp[2]);
                    setTaskId(temp[3]);
                }}
              >
                <option value="null">select tasks here</option>
                {
                    selectedTask.map((task, index) => {
                        return (
                            <option value={`${task.taskType},${task.status},${task.name},${task._id}`} key={index}>{task.name}</option>
                        )
                    })
                }
              </select>
            </div>

            <div className="form-group my-3">
              <label htmlFor="taskType">Task Type</label>
              <input
                type="text"
                className="form-control"
                id="taskType"
                disabled
                
                value={taskType}
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="taskStatus">Task Status</label>
              <input
                type="text"
                className="form-control"
                id="taskStatus"
                disabled
                
                value={status}
              />
            </div>


        
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={handleAssignTaskFlag}
              >
                Close
              </button>
              <button type="button" disabled={!taskName} className="btn btn-outline-success btn-sm" onClick={handleAssign}>
                Assign
              </button>
            </div>
          </form>
        </div>
      </div>
}
    </>
  );
};

export default AssignTask;
