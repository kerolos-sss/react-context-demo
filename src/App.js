import React, { useContext } from 'react';

import './App.css';
import { CardHeader } from 'reactstrap'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/AuthContext'
import { LoginScreen } from './screens/LoginScreen';
import { PostsScreen } from './screens/PostsScreen';
import { PostsProvider } from './contexts/PostsContext';
import { EditPostScreen } from './screens/EditPostScreen';
import { PostDetailScreen } from './screens/PostDetailScreen';
import { AddPostScreen } from './screens/AddPostScreen';
const Home = () => <p>Home</p>
const About = () => <p>About</p>


function App() {
  const { state: authState } = useContext(AuthContext);

  return (
    <div className="App">
      <CardHeader>Hello </CardHeader>
      {authState?.creds ?
        <BrowserRouter>
          <Redirect path="/" to="/posts" />
          <Route exact path="/posts" component={PostsScreen} />
          <Route path="/posts/new"  component={AddPostScreen} />
          <Route path="/posts/edit/:id"  component={EditPostScreen} />
          <Route exact path="/posts/:id"  component={PostDetailScreen} />

          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />



        </BrowserRouter> :
        <BrowserRouter >
          <Redirect path="/" to="/login" />
          <Route path="/login" component={LoginScreen} />
        </BrowserRouter>
      }
    </div>
  );
}

export default () => {
  return (

    <AuthProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthProvider>
  );
}

