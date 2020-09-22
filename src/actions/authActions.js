import * as services from './../services'


export const login = dispatch =>  async (username, password) => {
    try {
        let user = await services.logIn(username, password);
        dispatch({type: "login_success", payload: user})
    } catch (e){
        dispatch({type: "login_error", payload: e.message})
    }
}

export const setUsername = dispatch => (username) => {
    dispatch({type: "login_set_username", payload: username})
}

export const setPassword = dispatch => (password) => {
    dispatch({type: "login_set_password", payload: password})
}
