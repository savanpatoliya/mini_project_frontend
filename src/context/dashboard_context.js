import React, { useEffect, useContext, useReducer, useState } from 'react';
import reducer from "../reducer/dashboard_reducer"
import {DASHBOARD_EMAIL_CHANGE, DASHBOARD_NAME_CHANGE, DASHBOARD_PROJECT_CHANGE, HANDLE_CREATE_MEMBER, HANDLE_CREATE_PROJECT} from "../action"



const initialState = {
    type: "creater",
    name: "",
    email: "",
    projects: [],
    members: [],
    tasks: [],
    createMemberFlag: false,
    createProjectFlag: false,

    
}


const DashboardContext = React.createContext();
export const DashboradProvider = ({ children }) => {
    const [state, dispath] = useReducer(reducer, initialState);

    const setEmail = (val) => {
        dispath({type:DASHBOARD_EMAIL_CHANGE, payload: val})
    }
    const setName = (val) => {
        dispath({type:DASHBOARD_NAME_CHANGE, payload: val})
    }
    const setProjects = (val) => {
        dispath({type:DASHBOARD_PROJECT_CHANGE, payload: val})
    }

    const handleCreateMember = () => {
        dispath({type: HANDLE_CREATE_MEMBER});
    }

    const handleCreateProject = () => {
        dispath({type: HANDLE_CREATE_PROJECT});
    }

     
    return (
        <DashboardContext.Provider value={{...state, setEmail, setName, setProjects, handleCreateMember, handleCreateProject}}>{children}</DashboardContext.Provider>
      )
}


export const useDashboradContext = () => {
    return useContext(DashboardContext)
}