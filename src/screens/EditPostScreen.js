import React, { useContext } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom"
import { PostForm } from "../components/PostForm";
import { PostsContext, withPosts } from "../contexts/PostsContext";
import { editPost } from "../services";

const _EditPostScreen = ({history, location, postsState,  editPost}) =>{
    // console.log(props);
    
    // const {state: postsState,  editPost} = useContext(PostsContext);

    const save = (key, post) => {
        editPost(key, 
        {
            title: post.heading,
            body: post.detail
        }).then(() => {
            history.goBack();
        }).catch(e => {
            console.log(e)
        })
    }
    
    return <div>
        <PostForm data={location.state.data} doneHandler={save} success={postsState.success} error={postsState.error}  />
    </div>
}



export const EditPostScreen = withPosts(  withRouter(_EditPostScreen) )

