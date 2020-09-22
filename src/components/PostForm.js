import React, { useState } from 'react'
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
export const PostForm = ({data, doneHandler, success, error}) => {

    const [headingState, setHeadingState] = useState(data.heading);
    const [detailState, setDetailState] = useState(data.detail);

    // const [successState, setSuccessState] = useState();
    
    // const [errorState, setErrorState] = useState();
    
    const savePressed = () => {
        doneHandler(data.key, {heading: headingState, detail: detailState})
        // .then( ()=>{
        //     setSuccessState("Success");
        //     setErrorState(null);
        // })
        // .catch( (/** @type Error */ e)=>{
        //     setErrorState(e.message);
        //     setSuccessState(null);
        // }) 
    }
    return <div>
        
        { success && <>  <Label style={{color:"green"}}>{success}</Label> <br/> </>} 
        { error && <>  <Label style={{color:"red"}}>{error}</Label> <br/> </> }
        <br/>
        <Label>Post Id</Label>
        <br/>
        <Label>{data?.key || "New Post"  }</Label>
        <br/>
        <Label>Heading</Label>
        <br/>
        <Input type="text" value={headingState} onChange={e => setHeadingState(e.target.value)}/>
        <br/>
        <Label>Detail</Label>
        <br/>
        <Input type="text" value={detailState} onChange={e => setDetailState(e.target.value)} />
        <br/>
        <Input type="button" value="Save" onClick={ savePressed}/>
        <br/>
    </div>
}