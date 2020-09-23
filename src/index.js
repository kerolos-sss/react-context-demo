import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { combinedReducers } from './reducers';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'
import { sagaTheLogin } from './actions/authActions';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combinedReducers,
  applyMiddleware(
    // thunkMiddleware, // lets us dispatch() functions
    sagaMiddleware,
    loggerMiddleware // neat middleware that logs actions

    )
)


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
sagaMiddleware.run(mySaga);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
