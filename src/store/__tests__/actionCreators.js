import {
  addStudentSuccess,
  addStudentRequest,
  addStudentError,
  deleteStudentRequest,
  deleteStudentSuccess,
  deleteStudentError,
  updateStudentRequest,
  updateStudentSuccess,
  updateStudentError,
} from '../actionCreators';
import {
  ADD_STUDENT_REQUESTED,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  DELETE_STUDENT_REQUESTED,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_ERROR,
  UPDATE_STUDENT_REQUESTED,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_ERROR,
} from '../actions';

test('addStudentRequest returns object with proper type and value passed', () => {
  const initialStudent = { firstname: 'Mikkel', lastname: 'Nielsen', id: 1 };

  expect(addStudentRequest(initialStudent)).toEqual({
    type: ADD_STUDENT_REQUESTED,
    studentData: initialStudent,
  });
});

test('addStudentSuccess returns object with proper type and value passed', () => {
  const initialStudent = { firstname: 'Mikkel', lastname: 'Nielsen', id: 1 };

  expect(addStudentSuccess(initialStudent)).toEqual({
    type: ADD_STUDENT_SUCCESS,
    student: initialStudent,
  });
});

test('addStudentError returns object with proper type and value passed', () => {
  const error = new Error('test');
  const action = addStudentError(error);

  expect(action).toEqual({
    type: ADD_STUDENT_ERROR,
    error,
  });
  expect(action.error).toBeInstanceOf(Error);
});

test('deleteStudentRequest returns object with proper type and value passed', () => {
  const initialId = 1;

  expect(deleteStudentRequest(initialId)).toEqual({
    type: DELETE_STUDENT_REQUESTED,
    id: initialId,
  });
});

test('deleteStudentSuccess returns object with proper type and value passed', () => {
  const initialId = 1;

  expect(deleteStudentSuccess(initialId)).toEqual({
    type: DELETE_STUDENT_SUCCESS,
    id: initialId,
  });
});

test('deleteStudentError returns object with proper type and value passed', () => {
  const error = new Error('test');
  const action = deleteStudentError(error);

  expect(action).toEqual({
    type: DELETE_STUDENT_ERROR,
    error: error,
  });
  expect(action.error).toBeInstanceOf(Error);
});

test('updateStudentRequest returns object with proper type and value passed', () => {
  const initialStudent = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen' };

  expect(updateStudentRequest(initialStudent)).toEqual({
    type: UPDATE_STUDENT_REQUESTED,
    student: initialStudent,
  });
});

test('updateStudentSuccess returns object with proper type and value passed', () => {
  const initialStudent = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen' };

  expect(updateStudentSuccess(initialStudent)).toEqual({
    type: UPDATE_STUDENT_SUCCESS,
    student: initialStudent,
  });
});

test('updateStudentError returns object with proper type and value passed', () => {
  const error = new Error();
  const action = updateStudentError(error);

  expect(action).toEqual({
    type: UPDATE_STUDENT_ERROR,
    error,
  });
  expect(action.error).toBeInstanceOf(Error);
});
