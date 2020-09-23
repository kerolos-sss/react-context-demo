import { call, fork, put, select, takeEvery, take, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
/**
 * 
 * @param {number} ms 
 */
const myDelay = (ms) => new Promise(res => setTimeout(res, ms)); 

const getAuthState = () => select(state => state.auth)

function* sagaDemoLogin(action) {
    console.log(action)
    const { getLoginErrorAction, setUsername, setPassword, login } = action.payload
    yield put(getLoginErrorAction("I will use the error message to display some interesting idea."))
    yield call(myDelay, 5000);
    let delayMs = 300
    
    const message = "I am Trying to display this message using saga delays. This demo is to show how generator functions are incorporated into saga"
    yield* displayMessageWithPutAction(message, delayMs, getLoginErrorAction);
    
    const message2 = "I will enter my user name first"
    yield* displayMessageWithPutAction(message2, delayMs, getLoginErrorAction);
    
    yield call(myDelay, 10000);
    
    delayMs = 500
        
    let username = "UserName"
    yield* displayMessageWithCall(username, delayMs, setUsername);
    
    let password = "User"
    yield* displayMessageWithCall(password, delayMs, setPassword);
    
    delayMs = 300
    let ps = getAuthState().password
    let msg = "Ops. Wrong password, will try again. ps: his password was :::" + password
    yield* displayMessageWithPutAction(msg, delayMs, getLoginErrorAction);
    
    delayMs = 500
        
    username = "UserName"
    yield* displayMessageWithCall(username, delayMs, setUsername);
    
    password = "UserName"
    yield* displayMessageWithCall(password, delayMs, setPassword);

    while (! getAuthState().creds ){
        const message3 = "I will try to login"
        yield* displayMessageWithCall(message3, delayMs, getLoginErrorAction);
        yield call(login, username, password);
    }




}
function* displayMessageWithCall(message, delayMs, func) {
    for (let i = 0; i < message.length; i++) {
        yield call(myDelay, delayMs);
        yield call(func, message.substr(0, i + 1));
    }
}

function* displayMessageWithPutAction(message, delayMs, getLoginErrorAction) {
    for (let i = 0; i < message.length; i++) {
        yield call(myDelay, delayMs);
        yield put(getLoginErrorAction(message.substr(0, i + 1)));
    }
}

function* demoAction2(action) {
    // try {
    //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    // } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    // }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* watchDemoAction1() {
    yield takeLatest("SAGA_DEMO_LOGIN", sagaDemoLogin);
}
function* watchDemoAction2() {
    yield takeLatest("SAGA_DEMO_2", demoAction2);
}

function* rootSaga() {
    yield takeLatest("SAGA_DEMO_LOGIN", sagaDemoLogin);

    // yield [
    //     fork(watchDemoAction1), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    //     fork(watchDemoAction2),
    // ];
}
export default rootSaga;