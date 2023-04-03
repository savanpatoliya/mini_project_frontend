import React, { useEffect, useContext, useReducer, useState } from "react";
import reducer from "../reducer/dashboard_reducer";
import {
  DASHBOARD_EMAIL_CHANGE,
  DASHBOARD_NAME_CHANGE,
  DASHBOARD_PROJECT_CHANGE,
  HANDLE_CLOSE_CREATE_MEMBER,
  HANDLE_CLOSE_CREATE_PROJECT,
  HANDLE_DISPLAY_MEMBER,
  CHANGE_PROJECT_ID,
  SET_MEMBERS,
  ADD_TASK_FLAG,
  CHANGE_MEMBER_ID,
  HANDLE_CLOSE_DISPLAY_TASK,
  HANDLE_CLOSE_ASSIGN_TASK_FLAG,
  SET_SELECTED_TASK,
  HANDLE_EDIT_PROJECT_FLAG,
  HANDLE_EDIT_MEMBER_FLAG,
  CHANGE_TASK_ID,
  HANDLE_KANBAN_BOARD_FLAG,
} from "../action";

const initialState = {
  type: "creater",
  name: "",
  email: "",
  projects: [],
  members: [],
  tasks: [],
  selectedTasks: [],
  status: ["BACKLOG", "SELECTED FOR DEVELOPMENT", "IN PROGRESS", "DONE"],
  projectId: "",
  memberId: "",
  taskId: "",
  createMemberFlag: false,
  createProjectFlag: false,
  displayMemberFlag: false,
  addTaskFlag: false,
  displayTaskFlag: false,
  assignTaskFlag: false,
  editProjectFlag: false,
  editMemberFlag: false,
  kanbanBoardFlag: false,
};

const DashboardContext = React.createContext();
export const DashboradProvider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);

  const setEmail = (val) => {
    dispath({ type: DASHBOARD_EMAIL_CHANGE, payload: val });
  };
  const setName = (val) => {
    dispath({ type: DASHBOARD_NAME_CHANGE, payload: val });
  };
  const setProjects = (val) => {
    dispath({ type: DASHBOARD_PROJECT_CHANGE, payload: val });
  };
  const setSelectedTask = (val) => {
    dispath({ type: SET_SELECTED_TASK, payload: val });
  };

  const handleCloseCreateMember = () => {
    dispath({ type: HANDLE_CLOSE_CREATE_MEMBER });
  };

  const handleCloseCreateProject = () => {
    dispath({ type: HANDLE_CLOSE_CREATE_PROJECT });
  };

  const handleDisplayMember = () => {
    dispath({ type: HANDLE_DISPLAY_MEMBER });
  };

  const changeProjectId = (val) => {
    console.log(val);
    dispath({ type: CHANGE_PROJECT_ID, payload: val });
  };
  const changeMemberId = (val) => {
    console.log(val);
    dispath({ type: CHANGE_MEMBER_ID, payload: val });
  };
  const changeTaskId = (val) => {
    console.log(val);
    dispath({ type: CHANGE_TASK_ID, payload: val });
  };

  const setMembers = (val) => {
    dispath({ type: SET_MEMBERS, payload: val });
  };
  const handleCloseCreateTask = () => {
    dispath({ type: ADD_TASK_FLAG });
  };
  const handleCloseDisplayTask = () => {
    dispath({ type: HANDLE_CLOSE_DISPLAY_TASK });
  };
  const handleAssignTaskFlag = () => {
    dispath({ type: HANDLE_CLOSE_ASSIGN_TASK_FLAG });
  };
  const handleEditProjectFlag = () => {
    dispath({ type: HANDLE_EDIT_PROJECT_FLAG });
  };
  const handleEditMemberFlag = () => {
    dispath({ type: HANDLE_EDIT_MEMBER_FLAG });
  };
  const handleKanbanBoardFlag = () => {
    dispath({type: HANDLE_KANBAN_BOARD_FLAG});
  }

  
  

  return (
    <DashboardContext.Provider
      value={{
        ...state,
        setEmail,
        setName,
        setProjects,
        handleCloseCreateMember,
        handleCloseCreateProject,
        handleDisplayMember,
        changeProjectId,
        setMembers,
        handleCloseCreateTask,
        changeMemberId,
        handleCloseDisplayTask,
        handleAssignTaskFlag,
        setSelectedTask,
        handleEditProjectFlag,
        handleEditMemberFlag,
        changeTaskId,
        handleKanbanBoardFlag
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboradContext = () => {
  return useContext(DashboardContext);
};
