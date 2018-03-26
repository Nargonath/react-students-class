import deepFreeze from 'deep-freeze';

import { student, students } from '../reducers';
import { addStudent, updateStudent, deleteStudent } from '../actionCreators';

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

  test('should add a new student to the list', () => {
    const stateBefore = [];
    const studentData = { firstname: 'Mikkel', lastname: 'Nielsen' };
    const action = addStudent(studentData);
    const stateAfter = [{ ...studentData, id: expect.any(Number) }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toMatchObject(expect.arrayContaining(stateAfter));
  });

  test('should delete a student when it exists', () => {
    const stateBefore = [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen' }];
    const action = deleteStudent(1);

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toHaveLength(0);
  });

  test('should return current state when delete a student that does not exist', () => {
    const stateBefore = [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen' }];
    const action = deleteStudent(2);

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toMatchObject(expect.arrayContaining(stateBefore));
  });

  test('should update student', () => {
    const stateBefore = [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen' }];
    const studentData = { id: 1, firstname: 'Henri', lastname: 'Nielsen' };
    const action = updateStudent(studentData);
    const stateAfter = [studentData];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toMatchObject(expect.arrayContaining(stateAfter));
  });

  test('should return current state when update inexistant student', () => {
    const stateBefore = [{ id: 1, firstname: 'Mikkel', lastname: 'Nielsen' }];
    const studentData = { id: 2, firstname: 'Henri', lastname: 'Nielsen' };
    const action = updateStudent(studentData);

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(students(stateBefore, action)).toMatchObject(expect.arrayContaining(stateBefore));
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
    const stateBefore = {};
    const studentData = { firstname: 'Mikkel', lastname: 'Nielsen' };
    const action = addStudent(studentData);
    const stateAfter = { id: expect.any(Number), firstname: 'Mikkel', lastname: 'Nielsen' };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(student(stateBefore, action)).toEqual(stateAfter);
  });

  test('should update given student when it exists', () => {
    const stateBefore = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen' };
    const action = updateStudent({ id: 1, firstname: 'Henri', lastname: 'Nielsen' });
    const stateAfter = { id: 1, firstname: 'Henri', lastname: 'Nielsen' };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(student(stateBefore, action)).toEqual(stateAfter);
  });

  test('should return current state when user does not exist', () => {
    const stateBefore = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen' };
    const action = updateStudent({ firstname: 'Henri', lastname: 'Nielsen' });
    const stateAfter = { ...stateBefore };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(student(stateBefore, action)).toEqual(stateAfter);
  });
});
