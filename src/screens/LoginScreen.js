import React, { useContext } from 'react'
import { Input, Label } from 'reactstrap'
import { AuthContext } from '../contexts/AuthContext'
export const LoginScreen = () => {

    const {state, login, setUsername, setPassword} = useContext(AuthContext)
    console.log(state);

    return (<>
        <Label>Username</Label>
        <br/>
        <Input value={state?.username || ""} type="text" onChange={ e => setUsername(e.target.value)} />
        <br/>
        <Label>Password</Label>
        <br/>
        <Input value={state?.password || ""} type="password" onChange={e => setPassword(e.target.value)}/>
        <br/>
        <Input value="login" type="button" onClick={() => login(state.username, state.password)}/>
        { state?.error &&  <> <br/> <Label>{state.error}</Label> </>}
    </>)

}