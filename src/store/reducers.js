import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from './actions';

export const students = (state = [], action) => {
  if (!action) {
    return state;
  }

  let nextState = null;

  switch (action.type) {
    case ADD_STUDENT: {
      nextState = [...state, student({}, action)];
      break;
    }

    case DELETE_STUDENT: {
      const studentIndex = state.findIndex(student => student.id === action.id);
      if (studentIndex === -1) {
        nextState = state;
      }

      nextState = [...state.slice(0, studentIndex), ...state.slice(studentIndex + 1)];
      break;
    }

    case UPDATE_STUDENT: {
      const studentIndex = state.findIndex(student => student.id === action.student.id);
      if (studentIndex === -1) {
        nextState = state;
        break;
      }

      nextState = [
        ...state.slice(0, studentIndex),
        student(state[studentIndex], action),
        ...state.slice(studentIndex + 1),
      ];
      break;
    }

    default:
      nextState = state;
  }

  return nextState;
};

export const student = (state = {}, action) => {
  if (!action) {
    return state;
  }

  let nextState = null;

  switch (action.type) {
    case ADD_STUDENT: {
      nextState = { ...action.student };
      break;
    }

    case UPDATE_STUDENT: {
      if (state.id !== action.student.id) {
        nextState = state;
        break;
      }

      nextState = { ...state, ...action.student };
      break;
    }

    default:
      nextState = state;
  }

  return nextState;
};
