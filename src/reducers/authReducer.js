
export const authReducer = (state = {}, action) => {

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
