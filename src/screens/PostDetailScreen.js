import React, { useContext } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom"
import { PostDetail } from "../components/PostDetail";
import { PostsContext, withPosts } from "../contexts/PostsContext";

const _PostDetailScreen = ({ history, location, postsState, editPost }) => {
    // console.log(props);



    // const { state: postsState, editPost } = useContext(PostsContext);

    const done = (key, post) => {
        history.goBack();
    }

    return <div>
        <PostDetail data={location.state.data} doneHandler={done} />
    </div>
}



export const PostDetailScreen = withPosts( withRouter(_PostDetailScreen))

