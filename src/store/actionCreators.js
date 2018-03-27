import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from './actions';

let currentId = 0;

export const addStudent = student => ({
  type: ADD_STUDENT,
  student: { ...student, id: ++currentId },
});

export const deleteStudent = id => ({ type: DELETE_STUDENT, id });

export const updateStudent = student => ({ type: UPDATE_STUDENT, student });
