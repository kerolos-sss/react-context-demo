import { createDataContext } from './createDataContext'
import { postsReducer } from '../reducers/postsReducer';
import {fetchAll, addPost, editPost, deletePost} from '../actions/postsActions'

export const { Context: PostsContext, Provider: PostsProvider } = createDataContext(
    postsReducer,
    {
        fetchAll,
        addPost,
        editPost,
        deletePost
    });


