export const addStudent = student => ({ type: 'ADD_STUDENT', student });

export const deleteStudent = id => ({ type: 'DELETE_STUDENT', id });

export const updateStudent = (id, data) => ({ type: 'UPDATE_STUDENT', data });
