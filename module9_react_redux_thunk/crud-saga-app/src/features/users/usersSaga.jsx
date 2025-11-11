import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
} from './usersSlice';

const API_URL = 'http://localhost:5000/users';

function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* addUserSaga(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserFailure(error.message));
  }
}

function* deleteUserSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    yield put(deleteUserFailure(error.message));
  }
}

export default function* usersSaga() {
  yield all([
    takeEvery(fetchUsersRequest.type, fetchUsersSaga),
    takeEvery(addUserRequest.type, addUserSaga),
    takeEvery(deleteUserRequest.type, deleteUserSaga),
  ]);
}
