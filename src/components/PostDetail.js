import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Input, Label } from 'reactstrap'

/**
 * @typedef {{ key: number| null, 
 *              heading: string | null | undefined, 
 *              detail:  string | null | undefined }} PostDisplayData
 * @typedef {Object} PostForm 
 * @property  {PostDisplayData} data
 * @property {(number, PostDisplayData) => Promise } doneHandler
 * @property {string} success
 * @property {error} error
 * @param {PostForm} props 
 * 
 */
export const PostDetail = ({data, doneHandler}) => {

    return <div>
        
        <br/>
        <Label>Post Id</Label>
        <br/>
        <Label>{data?.key   }</Label>
        <br/>
        <Label>Heading</Label>
        <br/>
        <Label>{data.heading}</Label> 
        <br/>
        <Label>Detail</Label>
        <br/>
        <p>{data.detail}</p>
        <br/>
        <Input type="button" value="Back" onClick={ doneHandler}/>
        <br/>
    </div>
}
