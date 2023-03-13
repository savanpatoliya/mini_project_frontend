import {DASHBOARD_EMAIL_CHANGE, DASHBOARD_NAME_CHANGE, DASHBOARD_PROJECT_CHANGE} from "../action"



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



    return state;
    throw new Error(`No Matching "${action.type}" - action type`)

}


export default dashboard_reducer;