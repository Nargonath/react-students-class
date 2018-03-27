import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { students } from './reducers';

const classApp = combineReducers({ students });
const store = createStore(classApp, applyMiddleware(logger));

export { store };
