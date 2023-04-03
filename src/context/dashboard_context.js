import React, { useEffect, useContext, useReducer, useState } from 'react'
import reducer from '../reducer/dashboard_reducer'
import {
  DASHBOARD_EMAIL_CHANGE,
  DASHBOARD_NAME_CHANGE,
  DASHBOARD_PROJECT_CHANGE,
  HANDLE_CLOSE_CREATE_MEMBER,
  HANDLE_CLOSE_CREATE_PROJECT,
  HANDLE_DISPLAY_MEMBER,
  CHANGE_PROJECT_ID,
  SET_MEMBERS,
  HANDLE_PROJECT_MANAGER,
  HANDLE_CLOSE_TASK,
} from '../action'

const initialState = {
  type: 'creater',
  name: '',
  email: '',
  projects: [],
  members: [],
  tasks: [],
  projectId: '',
  status: ['BACKLOG', 'SELECTED FOR DEVELOPMENT', 'IN PROGRESS', 'DONE'],
  createMemberFlag: false,
  createProjectFlag: false,
  displayMemberFlag: false,
  displayTaskflag: false,
}

const DashboardContext = React.createContext()
export const DashboradProvider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState)

  const setEmail = (val) => {
    dispath({ type: DASHBOARD_EMAIL_CHANGE, payload: val })
  }
  const setName = (val) => {
    dispath({ type: DASHBOARD_NAME_CHANGE, payload: val })
  }
  const setProjects = (val) => {
    dispath({ type: DASHBOARD_PROJECT_CHANGE, payload: val })
  }

  const handleCloseCreateMember = () => {
    dispath({ type: HANDLE_CLOSE_CREATE_MEMBER })
  }

  const handleCloseCreateProject = () => {
    dispath({ type: HANDLE_CLOSE_CREATE_PROJECT })
  }

  const handleDisplayMember = () => {
    dispath({ type: HANDLE_DISPLAY_MEMBER })
  }

  const changeProjectId = (val) => {
    console.log(val)
    dispath({ type: CHANGE_PROJECT_ID, payload: val })
  }

  const setMembers = (val) => {
    dispath({ type: SET_MEMBERS, payload: val })
  }

  const handleProjectManager = () => {
    dispath({ type: HANDLE_PROJECT_MANAGER })
  }

  const handleCloseCreateTasks = () => {
    dispath({type: HANDLE_CLOSE_TASK})
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
        handleProjectManager,
        handleCloseCreateTasks,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboradContext = () => {
  return useContext(DashboardContext)
}
