import {
  ADD_STUDENT_REQUESTED,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  UPDATE_STUDENT_SUCCESS,
  DELETE_STUDENT_SUCCESS,
} from './actions';

export const students = (state = { isAdding: false, items: [] }, action) => {
  if (!action) {
    return state;
  }

  let nextState = null;

  switch (action.type) {
    case ADD_STUDENT_REQUESTED:
      nextState = { ...state, isAdding: true, addError: undefined };
      break;

    case ADD_STUDENT_SUCCESS: {
      nextState = {
        ...state,
        isAdding: false,
        items: [...state.items, student(undefined, action)],
      };
      break;
    }

    case ADD_STUDENT_ERROR:
      nextState = { ...state, isAdding: false, addError: action.error.message };
      break;

    case DELETE_STUDENT_SUCCESS: {
      const studentIndex = state.items.findIndex(student => student.id === action.id);
      if (studentIndex === -1) {
        nextState = state;
      }

      nextState = {
        ...state,
        items: [...state.items.slice(0, studentIndex), ...state.items.slice(studentIndex + 1)],
      };
      break;
    }

    case UPDATE_STUDENT_SUCCESS: {
      const studentIndex = state.items.findIndex(student => student.id === action.student.id);
      if (studentIndex === -1) {
        nextState = state;
        break;
      }

      nextState = {
        ...state,
        items: [
          ...state.items.slice(0, studentIndex),
          student(state.items[studentIndex], action),
          ...state.items.slice(studentIndex + 1),
        ],
      };
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
    case ADD_STUDENT_SUCCESS: {
      nextState = { ...action.student };
      break;
    }

    case UPDATE_STUDENT_SUCCESS: {
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
