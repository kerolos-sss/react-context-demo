import React, { useContext } from 'react'
import { PostList } from '../components/PostList'


export const PostsScreen = () => {

    // [postsContext, ] = useContext()
    return <>
        <PostList posts={[
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
        ].map(item => {
            return {
                key: item.id,
                heading: item.title,
                detail: item.body
            }
        })} 
        actions={{ delete: () => { }, edit: () => { }, view: () => { } }} />
    </>
}