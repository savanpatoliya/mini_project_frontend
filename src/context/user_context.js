import React, { useEffect, useContext, useReducer, useState } from 'react';
import reducer from "../reducer/user_reducer";
import {
    REGISTER_CREATER,
    LOGIN_CREATER,
    LOGIN_MEMBER,
    NAME_REGISTER_CHANGE,
    NUMBER_REGISTER_CHANGE,
    EMAIL_REGISTER_CHANGE,
    PASSWORD_REGISTER_CHANGE
}
from "../action";


const initialState = {
    type: "",
    name: "",
    email: "",
    password: "",
    number: "",
}

const UserContext = React.createContext()


export const UserProvider = ({ children }) => {
    const [state, dispath] = useReducer(reducer, initialState);
    
    


    const setName = (val) => {
        dispath({type: NAME_REGISTER_CHANGE, payload: val})
    }
    const setNumber = (val) => {
        dispath({type: NUMBER_REGISTER_CHANGE, payload: val})
    }
    const setEmail = (val) => {
        dispath({type: EMAIL_REGISTER_CHANGE, payload: val})
    }
    const setPassword = (val) => {
        dispath({type: PASSWORD_REGISTER_CHANGE, payload: val})
    }
    

    return (
        <UserContext.Provider value={{...state, setName, setNumber, setEmail, setPassword}}>{children}</UserContext.Provider>
      )
}

export const useUserContext = () => {
    return useContext(UserContext)
}