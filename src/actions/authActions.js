import * as services from './../services'


export const sagaTheLogin = dispatch =>  async () => {

    debugger;
    dispatch(
        {type: "SAGA_DEMO_LOGIN", payload: {getLoginErrorAction, 
        setUsername: setUsername(dispatch), 
        setPassword: setPassword(dispatch),
        login:login(dispatch)}
  })
}


export const login = dispatch =>  async (username, password) => {
    try {
        let user = await services.logIn(username, password);
        dispatch({type: "login_success", payload: user})
    } catch (e){
        dispatch(getLoginErrorAction(e.message))
    }
}

export const setUsername = dispatch => (username) => {
    dispatch({type: "login_set_username", payload: username})
}

export const setPassword = dispatch => (password) => {
    dispatch({type: "login_set_password", payload: password})
}
export const getLoginErrorAction = (message) => {
    return { type: "login_error", payload: message };
}

