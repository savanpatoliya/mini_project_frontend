import {DASHBOARD_EMAIL_CHANGE, DASHBOARD_NAME_CHANGE, DASHBOARD_PROJECT_CHANGE, HANDLE_CLOSE_CREATE_MEMBER, HANDLE_CLOSE_CREATE_PROJECT, HANDLE_DISPLAY_MEMBER, CHANGE_PROJECT_ID, SET_MEMBERS} from "../action"



const dashboard_reducer = (state, action) => {

    if(action.type === DASHBOARD_EMAIL_CHANGE){
        console.log(action.payload);
        return {...state, email: action.payload}

    }
    if(action.type === DASHBOARD_NAME_CHANGE){
        console.log(action.payload);
        return {...state, name: action.payload}
    }
    if(action.type === DASHBOARD_PROJECT_CHANGE){
        console.log(action.payload);
        return {...state, projects: action.payload}
    }
    if(action.type === HANDLE_CLOSE_CREATE_MEMBER){
        return {...state, createMemberFlag: !state.createMemberFlag, createProjectFlag: false};
    }
    if(action.type === HANDLE_CLOSE_CREATE_PROJECT){
        
        return {...state, createProjectFlag: !state.createProjectFlag, createMemberFlag: false};
    }
    if(action.type === HANDLE_DISPLAY_MEMBER){
        return {...state, displayMemberFlag: !state.displayMemberFlag, createMemberFlag: false, createProjectFlag: false}
    }
    if(action.type === CHANGE_PROJECT_ID){
        console.log(action.payload);
        return {...state, projectId: action.payload}
    }
    if(action.type === SET_MEMBERS){
        return {...state, members: action.payload}
    }


    return state;
    throw new Error(`No Matching "${action.type}" - action type`)

}


export default dashboard_reducer;