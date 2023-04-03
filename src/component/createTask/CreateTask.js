import axios from "axios";
import React, { useState } from "react";
import { useDashboradContext } from "../../context/dashboard_context";

const CreateTask = () => {
  const { handleCloseCreateTask, projectId} = useDashboradContext();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("backlog");
  const [taskType, setTaskType]  = useState("task");
  const [desc, setDesc] = useState("");



  const handleCreateTask = async(e) => {
    e.preventDefault();
    const temp = {projectId, name, desc, taskType, status};
    console.log("for testing");
    console.log(temp);

    try{
      const res = await axios.post("/api/v1/dashboard/createTask", {projectId, name, desc, taskType, status}, {
        withCredentials: true,
      });
      console.log("here in handle create task")
      console.log(res.data);
      handleCloseCreateTask();
    }
    catch(err){

      console.log(err);

    }


  }

  return (
    <>
      <div className="container w-50 my-3" style={{ height: "85%" }}>
        <div className style={{ height: "10%" }}>
          <h1>Create Task</h1>
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
              <select class="form-control" id="taskType" onChange={(e) => {setTaskType(e.target.value)}}>
                <option value="task">Task</option>
                <option value="bug">Bug</option>
                <option value="error">Error</option>
                <option value="issue">Issue</option>
                <option value="deployment">Deployment</option>
              </select>
            </div>
            <div class="form-group my-3">
              <label for="taskStatus">Task Status</label>
              <select class="form-control" id="taskStatus" onChange={(e) => {setStatus(e.target.value)}}>
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
                onClick={handleCloseCreateTask}
              >
                Close
              </button>
              <button type="button" class="btn btn-outline-success btn-sm" onClick={handleCreateTask}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
