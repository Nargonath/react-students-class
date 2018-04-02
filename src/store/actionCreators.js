import {
  ADD_STUDENT_REQUESTED,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  UPDATE_STUDENT_REQUESTED,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_ERROR,
  DELETE_STUDENT_REQUESTED,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_ERROR,
} from './actions';

export const addStudentRequest = studentData => ({ type: ADD_STUDENT_REQUESTED, studentData });
export const addStudentSuccess = student => ({
  type: ADD_STUDENT_SUCCESS,
  student,
});
export const addStudentError = error => ({ type: ADD_STUDENT_ERROR, error });

export const deleteStudentRequest = id => ({ type: DELETE_STUDENT_REQUESTED, id });
export const deleteStudentSuccess = id => ({ type: DELETE_STUDENT_SUCCESS, id });
export const deleteStudentError = error => ({ type: DELETE_STUDENT_ERROR, error });

export const updateStudentRequest = student => ({ type: UPDATE_STUDENT_REQUESTED, student });
export const updateStudentSuccess = student => ({ type: UPDATE_STUDENT_SUCCESS, student });
export const updateStudentError = error => ({ type: UPDATE_STUDENT_ERROR, error });
