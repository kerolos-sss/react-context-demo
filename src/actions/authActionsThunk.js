import * as services from './../services'


export const login = (username, password) => async (dispatch, state) => {
    try {
        let user = await services.logIn(username, password);
        dispatch({type: "login_success", payload: user})
    } catch (e){
        dispatch({type: "login_error", payload: e.message})
    }
}

export const setUsername = (username) => async (dispatch, state) => {
    dispatch({type: "login_set_username", payload: username})
}

export const setPassword =  (password) => async (dispatch, state) => {
    dispatch({type: "login_set_password", payload: password})
}
