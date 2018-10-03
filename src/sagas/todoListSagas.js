import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const fetchUser = () => {}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchList(action) {
   try {
      const user = yield call(fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}
 
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeLatest("TODO_LIST_FETCH_REQUESTED", fetchList);
}

 
export default mySaga;