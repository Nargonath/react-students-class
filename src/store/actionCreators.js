import {
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  ADD_STUDENT_REQUESTED,
  ADD_STUDENT_ERROR,
} from './actions';

export const addStudentRequest = studentData => ({ type: ADD_STUDENT_REQUESTED, studentData });
export const addStudent = student => ({
  type: ADD_STUDENT,
  student,
});
export const addStudentError = error => ({ type: ADD_STUDENT_ERROR, error });

export const deleteStudent = id => ({ type: DELETE_STUDENT, id });

export const updateStudent = student => ({ type: UPDATE_STUDENT, student });
