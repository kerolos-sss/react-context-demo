import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { postsReducer } from "./postsReducer";

export const combinedReducers = combineReducers({
    postsReducer, authReducer
})