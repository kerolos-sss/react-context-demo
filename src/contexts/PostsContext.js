import { createDataContext } from './createDataContext'
import { postsReducer } from '../reducers/postsReducer';
import { fetchAll, addPost, editPost, deletePost } from '../actions/postsActions'
// import { fetchAll, addPost, editPost, deletePost } from '../actions/postsActionsThunk'

import { connect } from 'react-redux';

export const { Context: PostsContext, Provider: PostsProvider } = createDataContext(
    postsReducer,
    {
        fetchAll,
        addPost,
        editPost,
        deletePost
    });



const mapStateToProps = state => {
    return {
        // since the state is named after the reducer in the combined reducers ../reducers/index.js
        postsState: state.posts
    }
}
// Those are actions with injected dispatch
const mapDispatchToProps = dispatch => {
    const actions =  {
        fetchAll,
        addPost,
        editPost,
        deletePost
    }
    const boundActions = {};
    for(const key in actions){
        boundActions[key] = actions[key](dispatch);
    }
    return boundActions
}

// Those are actions with injected dispatch
// const mapDispatchToProps = dispatch => {
//     const actions =  {
//         fetchAll,
//         addPost,
//         editPost,
//         deletePost
//     }
//     const boundActions = {};
//     for(const key in actions){
//         boundActions[key] = (...params) => dispatch(actions[key](...params))
//     }
//     console.log("POST CONTEXT")
//     console.log("BOUND ACTIONS", boundActions)
    
//     return boundActions
// }


export const withPosts = connect(mapStateToProps, mapDispatchToProps);