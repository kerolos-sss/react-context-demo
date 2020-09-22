import {createDataContext} from './createDataContext'
import {login, setPassword, setUsername} from '../actions/authActions'
import { authReducer } from '../reducers/authReducer';

export const { Context: AuthContext, Provider: AuthProvider  } = createDataContext(
    authReducer, {
    login,
    setPassword,
    setUsername,
}, {});
