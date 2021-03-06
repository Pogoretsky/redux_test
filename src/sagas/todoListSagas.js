import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

const fetchData = (url) => {
  let data = axios.get(url)
  .then(response => response)
  .catch(e => e)
  return data
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchList(action) {
  yield put({type: "SET_FETCH_STATUS", status: 'pending'})
  try {
    const data = yield call(fetchData, action.payload.url);
    yield put({type: "LIST_FETCH_SUCCEEDED", list: data.data});
  } catch (e) {
    yield put({type: "LIST_FETCH_FAILED", message: e.message});
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