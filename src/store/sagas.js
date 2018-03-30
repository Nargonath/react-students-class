import { put, takeEvery, all, call } from 'redux-saga/effects';

import { Api } from './api';
import { ADD_STUDENT_REQUESTED } from './actions';
import { addStudent, addStudentError } from './actionCreators';

function* addStudentRequest(action) {
  try {
    const newStudent = yield call(Api.addStudent, action.studentData);
    yield put(addStudent(newStudent));
  } catch (error) {
    yield put(addStudentError(error));
  }
}

const watchAddStudent = takeEvery(ADD_STUDENT_REQUESTED, addStudentRequest);

export function* rootSaga() {
  yield all([watchAddStudent]);
}
