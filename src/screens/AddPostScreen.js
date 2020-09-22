import React, { useContext } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom"
import { PostForm } from "../components/PostForm";
import { PostsContext, withPosts } from "../contexts/PostsContext";

const _AddPostScreen = ({history, postsState, addPost}) =>{

    // const {state,  addPost} = useContext(PostsContext);

    const save = (key, post) => {
        addPost({
            title: post.heading,
            body: post.detail
        }).then(() => {
            history.goBack();
        }).catch(e => {
            console.log(e)
        })
    }
    return <div>
        <PostForm data={{}} doneHandler={save} success={postsState.success} error={postsState.error}  />
    </div>
}



export const AddPostScreen = withPosts(  withRouter(_AddPostScreen) )

