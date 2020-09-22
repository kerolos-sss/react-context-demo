import {createDataContext} from './createDataContext'
import services from './../services'


const reducer = (state, action) => {

    switch(action.type){

        case "login_success":
            return {...state, error: null, creds: action.payload};
        case "login_error":
            return {...state, error: action.payload, creds: null};
        case "login_set_username":
            return {...state, error: null, username: action.payload};
        case "login_set_password":
            return {...state, error: null, password: action.payload};          
        default:
            return state; 
    }
}

const login = dispatch =>  async (username, password) => {
    try {
        let user = await services.logIn(username, password);
        dispatch({type: "login_success", payload: user})
    } catch (e){
        dispatch({type: "login_error", payload: e.message})
    }
}

const setUsername = dispatch => (username) => {
    dispatch({type: "login_set_username", payload: username})
}

const setPassword = dispatch => (password) => {
    dispatch({type: "login_set_password", payload: password})
}


export const { Context: AuthContext, Provider: AuthProvider  } = createDataContext(
    reducer, {
    login,
    setPassword,
    setUsername,
}, {});
