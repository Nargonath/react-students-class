import { combineReducers, createStore } from 'redux';
import { students } from './reducers';

const classApp = combineReducers({ students });
const store = createStore(classApp);

export { store };
