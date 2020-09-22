import React, { useContext } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom"
import { PostDetail } from "../components/PostDetail";
import { PostsContext } from "../contexts/PostsContext";

const _PostDetailScreen = ({ history, location, match }) => {
    // console.log(props);



    const { state, editPost } = useContext(PostsContext);

    const done = (key, post) => {
        history.goBack();
    }

    return <div>
        <PostDetail data={location.state.data} doneHandler={done} />
    </div>
}



export const PostDetailScreen = withRouter(_PostDetailScreen)

