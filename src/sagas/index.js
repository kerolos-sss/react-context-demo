import { call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
/**
 * 
 * @param {number} ms 
 */
const myDelay = (ms) => new Promise(res => setTimeout(res, ms)); 

function* sagaDemoLogin(action) {
    console.log(action)
    const { getLoginErrorAction, setUsername, setPassword, login } = action.payload
    yield put(getLoginErrorAction("I will use the error message to display som interesting idea."))
    yield call(myDelay, 10000);
    const message = "I am Trying to display this message using saga delays. This demo is to show how generator functions are incorporated into saga"
    for(let i = 0; i< message.length; i++){
        yield call(myDelay, 1000)
    
        yield put(getLoginErrorAction(message.substr(0,i+1)))
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