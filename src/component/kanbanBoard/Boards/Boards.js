import React, { useEffect } from "react";
import "../../../App.css";
import axios from "axios";
import { useDashboradContext } from "../../../context/dashboard_context";

function Boards() {
  const { status, projectId, memberId, setKanbanData, kanbanData, handleEditKanban, changeTaskId} =
    useDashboradContext();




  const handleClick = (e) => {
    if(e.detail === 2){ // double click
      handleEditKanban(); 
    } 
  }  

  const getMemberTaskForStatus = async () => {
    try {
      const tasks = await axios.post(
        "/api/v1/dashboard/getTaskOfMember",
        { projectId, memberId },
        {
          withCredentials: true,
        }
      );

      console.log(tasks.data.tasks);
      const backlogTask = tasks.data.tasks.filter((item) => {
        return item.status.toLowerCase() === "backlog";
      });

      const selectedTask = tasks.data.tasks.filter((item) => {
        return item.status.toLowerCase() === "selected for development";
      });

      const inProgressTask = tasks.data.tasks.filter((item) => {
        return item.status.toLowerCase() === "in progress";
      });

      const doneTask = tasks.data.tasks.filter((item) => {
        return item.status.toLowerCase() === "done";
      });

      setKanbanData([backlogTask, selectedTask, inProgressTask, doneTask]);
    } catch (err) {}
  };

  useEffect(() => {
    getMemberTaskForStatus();
  }, []);

  return (
    <>
      <div class="container" style={{ height: "100%" }}>
        <div
          class="row row-cols-1 "
          style={{ marginLeft: "0px", height: "100%" }}
        >
          {status.map((temp, index) => {
            return (
              <div
                class="col"
                style={{
                  width: "25%",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <div
                  class="p-3 border bg-light"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "10px",
                  }}
                >
                  {temp}
                  <div >
                    {/* cart started */}
                    {kanbanData[index]?.map((item) => {
                      return (
                        <div
                          onClick={(e) => {changeTaskId(item._id);handleClick(e)}}
                          style={{
                            background: "white",
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px",
                            gap: "10px",
                            boxShadow: "0px 10px 15px -17px #111",
                            marginBottom: "15px",
                          }}
                        >
                          <div>{item.name}</div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ display: "flex", gap: "5px" }}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-exclamation-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                              </svg>
                              <div>{item.taskType}</div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                              />
                            </svg>
                          </div>
                        </div>
                      );
                    })}

                    {/* cart ended   */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Boards;
