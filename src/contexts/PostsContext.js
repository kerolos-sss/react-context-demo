import { createDataContext } from './createDataContext'
import * as services from './../services'

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns {{error: null | undefined | string, 
 *  posts: {id: number, title: string, body: string, successMessage: string | null | undefined}[] }}
 */
const reducer = (state, action) => {
    console.log("PostsReducer")
    console.log(state)
    console.log(action)
    
    // if (state == null){
    //     state = {}
    // }
    switch (action.type) {
        case "fetch_posts_success":
            return { ...state, successMessage: action.payload.successMessage, error: null, posts: action.payload.posts };
        case "fetch_posts_error":
            return { ...state, successMessage: null, error: action.payload, posts: null };

        case "delete_post_success":
            state.posts = state.posts.filter(item => item.id != action.payload.id);
            return { ...state, successMessage: action.payload.successMessage, error: null, posts: [...state.posts] };
        case "delete_post_error":
            return { ...state, successMessage: null, error: action.payload }

        case "edit_post_success": {
            let postIndex = state.posts.findIndex(item => item.id = action.payload.id);
            const original = state.posts[postIndex];
            const post = { ...original, ...action.payload.data, id: original.id }
            state.posts[postIndex] = post;
            return { ...state, successMessage: action.payload.successMessage, error: null, posts: state.posts };
        }
        case "edit_post_error":
            return { ...state, successMessage: null, error: action.payload }

        case "add_post_success":
            const post = { ...action.payload.data, id: action.payload.id }
            state.posts.push(post);
            return { ...state, successMessage: action.payload.successMessage, error: null, posts: state.posts };
        case "add_post_error":
            return { ...state, successMessage: null, error: action.payload }

        default:
            return state;
    }
}



const fetchAll = dispatch => async () => {
    try {
        let posts = await services.getAllPosts();
        dispatch({ type: "fetch_posts_success", payload: { posts, successMessage: "posts loaded" } })
    } catch (e) {
        dispatch({ type: "fetch_posts_error", payload: e.message })
    }
}

const deletePost = dispatch => async (id) => {
    try {
        await services.deletePost(id);
        dispatch({ type: "delete_post_success", payload: { id: id, successMessage: "Deleted successfully" } })
    } catch (e) {
        dispatch({ type: "delete_post_error", payload: e.message })
    }
}

const editPost = dispatch => async (id, data) => {
    try {
        let post = await services.editPost(id, data);
        dispatch({ type: "edit_post_success", payload: { id: id, data: data, successMessage: "Edited successfully" } })
        return true;
    } catch (e) {
        dispatch({ type: "edit_post_error", payload: e.message })
        throw e;
    }
}

const addPost = dispatch => async (data) => {
    try {
        let post = await services.addPost(data);
        let id = post.id;
        dispatch({ type: "add_post_success", payload: { id: id, data: data, successMessage: "Added successfully" } })
        return true;
    } catch (e) {
        dispatch({ type: "add_post_error", payload: e.message })
        throw e
    }
}

export const { Context: PostsContext, Provider: PostsProvider } = createDataContext(
    reducer,
    {
        fetchAll,
        addPost,
        editPost,
        deletePost
    });


