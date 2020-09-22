import React, { useContext } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom"
import { PostForm } from "../components/PostForm";
import { PostsContext } from "../contexts/PostsContext";
import { editPost } from "../services";

const _EditPostScreen = ({history, location, match}) =>{
    // console.log(props);

     
    
    const {state,  editPost} = useContext(PostsContext);

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
        <PostForm data={location.state.data} doneHandler={save} success={state.success} error={state.error}  />
    </div>
}



export const EditPostScreen = withRouter(_EditPostScreen)

