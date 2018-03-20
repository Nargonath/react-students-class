import { addStudent, deleteStudent, updateStudent } from '../actionCreators';
import { ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from '../actions';

test('addStudent returns object with proper type and value passed', () => {
  const initialStudent = { firstname: 'Mikkel', lastname: 'Nielsen' };

  expect(addStudent(initialStudent)).toMatchObject(
    expect.objectContaining({ type: ADD_STUDENT, student: initialStudent }),
  );
});

test('deleteStudent returns object with proper type and value passed', () => {
  const initialId = 1;

  expect(deleteStudent(initialId)).toMatchObject(
    expect.objectContaining({ type: DELETE_STUDENT, id: initialId }),
  );
});

test('updateStudent returns object with proper type and value passed', () => {
  const initialStudent = { id: 1, firstname: 'Mikkel', lastname: 'Nielsen' };

  expect(updateStudent(initialStudent)).toMatchObject(
    expect.objectContaining({ type: UPDATE_STUDENT, student: initialStudent }),
  );
});
