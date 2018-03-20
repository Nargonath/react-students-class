import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from './actions';

export const addStudent = student => ({ type: ADD_STUDENT, student });

export const deleteStudent = id => ({ type: DELETE_STUDENT, id });

export const updateStudent = student => ({ type: UPDATE_STUDENT, student });
