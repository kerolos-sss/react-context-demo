import React, { useContext } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom"
import { PostForm } from "../components/PostForm";
import { PostsContext } from "../contexts/PostsContext";

const _AddPostScreen = ({history}) =>{

    const {state,  addPost} = useContext(PostsContext);

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
        <PostForm data={{}} doneHandler={save} success={state.success} error={state.error}  />
    </div>
}



export const AddPostScreen = withRouter(_AddPostScreen)

