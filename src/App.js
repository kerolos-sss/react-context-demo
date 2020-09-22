import React, { useContext } from 'react';

import logo from './logo.svg';


import './App.css';
import { CardHeader } from 'reactstrap'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/AuthContext'
import { LoginScreen } from './screens/LoginScreen';
import { PostsScreen } from './screens/PostsScreen';
const Home = () => <p>Home</p>
const About = () => <p>About</p>


function App() {
  const { state } = useContext(AuthContext);

  return (
    <div className="App">
      <CardHeader>Hello </CardHeader>
      {state?.creds ?
        <BrowserRouter>
            <Route path="/" component={PostsScreen} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
        </BrowserRouter> :
        <BrowserRouter >
            <Redirect path="/"  to="/login"  />
            <Route path="/login" component={LoginScreen} />
        </BrowserRouter>
      }
    </div>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

