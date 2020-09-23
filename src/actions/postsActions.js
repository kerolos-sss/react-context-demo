import * as services from './../services'


export const fetchAll = dispatch => async () => {
    try {
        let posts = await services.getAllPosts();
        dispatch({ type: "fetch_posts_success", payload: { posts, successMessage: "posts loaded" } })
    } catch (e) {
        dispatch({ type: "fetch_posts_error", payload: e.message })
    }
}

export const deletePost = dispatch => async (id) => {
    try {
        await services.deletePost(id);
        dispatch({ type: "delete_post_success", payload: { id: id, successMessage: "Deleted successfully" } })
    } catch (e) {
        dispatch({ type: "delete_post_error", payload: e.message })
    }
}

export const editPost = dispatch => async (id, data) => {
    try {
        let post = await services.editPost(id, data);
        dispatch({ type: "edit_post_success", payload: { id: id, data: data, successMessage: "Edited successfully" } })
        return true;
    } catch (e) {
        dispatch({ type: "edit_post_error", payload: e.message })
        throw e;
    }
}

export const addPost = dispatch => async (data) => {
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
