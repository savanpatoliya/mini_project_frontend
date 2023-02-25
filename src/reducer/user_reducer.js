import {
    NAME_REGISTER_CHANGE,
    NUMBER_REGISTER_CHANGE,
    EMAIL_REGISTER_CHANGE,
    PASSWORD_REGISTER_CHANGE,
    TYPE_LOGIN_CHANGE
}
from "../action";





const user_reducer = (state, action) => {
    
    
    

    


    
    if(action.type === NAME_REGISTER_CHANGE){
        console.log(action.payload);
        return {...state, name: action.payload}

    }
    if(action.type === NUMBER_REGISTER_CHANGE){
        console.log(action.payload);
        return {...state, number: action.payload}
    }
    if(action.type === EMAIL_REGISTER_CHANGE){
        console.log(action.payload);
        return {...state, email: action.payload}
    }
    if(action.type === PASSWORD_REGISTER_CHANGE){
        console.log(action.payload);
        return {...state, password: action.payload}
    }
    if(action.type === TYPE_LOGIN_CHANGE){

        return {...state, type: action.payload};

    }




    return state;
    throw new Error(`No Matching "${action.type}" - action type`)
}


export default user_reducer