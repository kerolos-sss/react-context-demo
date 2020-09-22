import React from 'react'
import { Input, ListGroup, ListGroupItem } from 'reactstrap'

/**
 * @typedef {Object} PostItem
 * @property {number} key
 * @property {string} heading
 * @property {string} detail
 * 
 * @typedef {Object} PostActions
 * @property {(number) => any } delete
 * @property {(number) => any } edit
 * @property {(number) => any } view
 * 
 * @typedef {Object} PostListProps
 * @property {PostItem[]} posts 
 * @property {PostActions} actions
 * 
 * @param {PostListProps} props
 * 
 */
export const PostList = ({posts, actions}) => {

    return <div>
        <ListGroup>
            {
                posts.map(item => {
                    return <ListGroupItem key={item.key}>
                        <h4>{item.heading}</h4>
                        <h4>{item.detail.substring(0, 15) + "..."}</h4>
                        <Input type="button" value="DELETE"  onClick={ () => actions.delete(item.key)} />
                        <Input type="button" value="Edit" onClick={ () => actions.edit(item.key)} />
                        <Input type="button" value="View" onClick={ () => actions.view(item.key)} />
                        
                        </ListGroupItem>
                })                
            }
        </ListGroup>
    </div>
}