import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Input } from 'reactstrap'
import { PostList } from '../components/PostList'
import { PostsContext, withPosts } from '../contexts/PostsContext'

let postsSample = [
    {
        id: 6,
        title: "First Post",
        body: "First post body"
    },
    {
        id: 7,
        title: "First Post",
        body: "First post body"
    },
]

const _PostsScreen = ({postsState, fetchAll, deletePost}) => {

    // const { state: postsState, fetchAll, deletePost } = useContext(PostsContext)
    
    const history = useHistory();
    const navigateToAddPost = () => {
        history.push("/posts/new")
    }
    const navigateToEditPost = (key, data) => {
        history.push(`/posts/edit/${key}`, {id: key, data})
    }
    const navigateToPostDetail = (key, data) => {
        history.push(`/posts/${key}`, {id: key, data})
    }
    
    useEffect(() => {
        console.log("PostsScreen reloaded")
        fetchAll()

        return () => {
            console.log("Cleanup should be here")
        }

    }, [])

    return <>
        {
            <Input type="button" onClick={navigateToAddPost} value="New Post" />
        }
        {
            <Input type="button" onClick={fetchAll} value="Reload" />
        }
        {
            postsState?.error ? <h4 style={{ color: "red" }}> {postsState.error}</h4> : null
        }
        {
            postsState?.successMessage ? <h4> {postsState.successMessage}</h4> : null
        }

        {
            postsState?.posts ?
                <PostList posts={(postsState.posts).map(item => {
                    return {
                        key: item.id,
                        heading: item.title,
                        detail: item.body
                    }
                })}
                    actions={{ delete: deletePost, edit: navigateToEditPost , view: navigateToPostDetail }} />
                :
                <h3>No Posts yet</h3>
        }
    </>
}

export const PostsScreen = withPosts(_PostsScreen);