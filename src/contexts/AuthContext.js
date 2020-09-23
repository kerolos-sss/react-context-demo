import { createDataContext } from './createDataContext'
// import { login, setPassword, setUsername } from '../actions/authActions'
import { login, setPassword, setUsername } from '../actions/authActionsThunk'
import { authReducer } from '../reducers/authReducer';
import { connect } from 'react-redux';

export const { Context: AuthContext, Provider: AuthProvider } = createDataContext(
    authReducer, {
    login,
    setPassword,
    setUsername,
}, {});



const mapStateToProps = state => {
    return {
        // since the state is named after the reducer in the combined reducers ../reducers/index.js
        authState: state.auth
    }
}
// const mapDispatchToProps = dispatch => {
//     const actions = {
//         login,
//         setPassword,
//         setUsername,
//     }
//     const boundActions = {};
//     for (const key in actions) {
//         boundActions[key] = actions[key](dispatch);
//     }
//     return boundActions
// }

const mapDispatchToProps = dispatch => {
    const boundActions = {
        // TODO: explain, whenever we dispatch a function
        // TODO: Thunk would pass dispatch and state to it 

        login: (...params) => dispatch(login(...params)),
        setPassword: (...params) => dispatch(setPassword(...params)),
        setUsername: (...params) => dispatch(setUsername(...params)),
    }
    return boundActions
}

export const withAuth = connect(mapStateToProps, mapDispatchToProps);