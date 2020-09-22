import React, { useContext, useEffect } from 'react'
import { Input } from 'reactstrap'
import { PostList } from '../components/PostList'
import { PostsContext } from '../contexts/PostsContext'

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

export const PostsScreen = () => {

    const { state: postsState, fetchAll, deletePost } = useContext(PostsContext)
    useEffect(() => {
        console.log("PostsScreen reloaded")
        fetchAll()


    }, [])

    return <>
        {
            <Input type="button" onClick={fetchAll} value="Reload" />
        }
        { 
        postsState ? 
            <PostList posts={(postsState?.posts || []).map(item => {
                return {
                    key: item.id,
                    heading: item.title,
                    detail: item.body
                }
            })}
                actions={{ delete: deletePost, edit: () => { }, view: () => { } }} />
            :
            <h3>No Posts yet</h3>
        }
    </>
}