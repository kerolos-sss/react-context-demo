import React, { useContext } from 'react'
import { Input, Label } from 'reactstrap'
import { AuthContext, withAuth } from '../contexts/AuthContext'
const _LoginScreen = function ({authState, login, setUsername, setPassword, sagaTheLogin}) {

    console.log(arguments);
    // const {state: authState, login, setUsername, setPassword} = useContext(AuthContext)
    console.log(authState);

    return (<>
        <Input value="SAGA AWAY THE LOGIN" type="button" onClick={() => sagaTheLogin()}/>
        <br/>
        <br/>
        <Label>Username</Label>
        <br/>
        <Input value={authState?.username || ""} type="text" onChange={ e => setUsername(e.target.value)} />
        <br/>
        <Label>Password</Label>
        <br/>
        <Input value={authState?.password || ""} type="password" onChange={e => setPassword(e.target.value)}/>
        <br/>
        <Input value="login" type="button" onClick={() => login(authState.username, authState.password)}/>
        { authState?.error &&  <> <br/> <Label style={{color: "red"}}>{authState.error}</Label> </>}
    </>)

}

export const LoginScreen = withAuth(_LoginScreen);