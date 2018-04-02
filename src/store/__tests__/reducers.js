import deepFreeze from 'deep-freeze';

import { student, students } from '../reducers';
import {
  addStudentRequest,
  addStudentSuccess,
  addStudentError,
  updateStudentSuccess,
  deleteStudentSuccess,
} from '../actionCreators';

describe('students reducer', () => {
  test('should return current state when no action given', () => {
    const stateBefore = [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen', age: 12 }];
    const action = null;

    deepFreeze(stateBefore);

    expect(students(stateBefore, action)).toBe(stateBefore);
  });

  test('should return current state when unknown action given', () => {
    const stateBefore = [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen', age: 12 }];
    const action = { type: 'unknown' };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toBe(stateBefore);
  });

  test('should toggle flag for adding async when add request', () => {
    const stateBefore = { items: [], isAdding: false };
    const studentData = { firstname: 'Mikkel', id: 1, lastname: 'Nielsen' };
    const action = addStudentRequest(studentData);
    const stateAfter = { items: [], isAdding: true };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toEqual(stateAfter);
  });

  test('should add a new student to the list', () => {
    const stateBefore = { items: [] };
    const studentData = { firstname: 'Mikkel', id: 1, lastname: 'Nielsen' };
    const action = addStudentSuccess(studentData);
    const stateAfter = { items: [{ ...studentData }] };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toMatchObject(stateAfter);
  });

  test('should toggle down flag for adding async when add success', () => {
    const stateBefore = { items: [], isAdding: true };
    const studentData = { firstname: 'Mikkel', id: 1, lastname: 'Nielsen' };
    const action = addStudentSuccess(studentData);
    const stateAfter = { items: [{ ...studentData }], isAdding: false };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toEqual(stateAfter);
  });

  test('should return error message when add error', () => {
    const stateBefore = { items: [] };
    const error = new Error('test');
    const action = addStudentError(error);
    const stateAfter = { items: [], addError: error.message };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toMatchObject(stateAfter);
  });

  test('should toggle down flag for async add when add error', () => {
    const stateBefore = { items: [], isAdding: true };
    const error = new Error('test');
    const action = addStudentError(error);
    const stateAfter = { items: [], isAdding: false, addError: error.message };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toEqual(stateAfter);
  });

  test('should delete a student when it exists', () => {
    const stateBefore = { items: [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen' }] };
    const action = deleteStudentSuccess(1);

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action).items).toHaveLength(0);
  });

  test('should return current state when delete a student that does not exist', () => {
    const stateBefore = { items: [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen' }] };
    const action = deleteStudentSuccess(2);

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toEqual(stateBefore);
  });

  test('should update student', () => {
    const stateBefore = { items: [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen' }] };
    const studentData = { id: 1, firstname: 'Henri', lastname: 'Nielsen' };
    const action = updateStudentSuccess(studentData);
    const stateAfter = { items: [{ ...studentData }] };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toEqual(stateAfter);
  });

  test('should return current state when update inexistant student', () => {
    const stateBefore = { items: [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen' }] };
    const studentData = { id: 2, firstname: 'Henri', lastname: 'Nielsen' };
    const action = updateStudentSuccess(studentData);

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toEqual(stateBefore);
  });
});

describe('student reducer', () => {
  test('should return current state when no action given', () => {
    const stateBefore = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen', age: 12 };
    const action = null;

    deepFreeze(stateBefore);

    expect(student(stateBefore, action)).toBe(stateBefore);
  });

  test('should return current state when unknown action given', () => {
    const stateBefore = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen', age: 12 };
    const action = { type: 'unknown' };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(student(stateBefore, action)).toBe(stateBefore);
  });

  test('should add a new student', () => {
    const stateBefore = undefined;
    const studentData = { firstname: 'Mikkel', id: 1, lastname: 'Nielsen' };
    const action = addStudentSuccess(studentData);
    const stateAfter = { ...studentData };

    deepFreeze(action);

    expect(student(stateBefore, action)).toEqual(stateAfter);
  });

  test('should update given student when it exists', () => {
    const stateBefore = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen' };
    const action = updateStudentSuccess({ id: 1, firstname: 'Henri', lastname: 'Nielsen' });
    const stateAfter = { id: 1, firstname: 'Henri', lastname: 'Nielsen' };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(student(stateBefore, action)).toEqual(stateAfter);
  });

  test('should return current state when user does not exist', () => {
    const stateBefore = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen' };
    const action = updateStudentSuccess({ firstname: 'Henri', lastname: 'Nielsen' });
    const stateAfter = { ...stateBefore };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(student(stateBefore, action)).toEqual(stateAfter);
  });
});
