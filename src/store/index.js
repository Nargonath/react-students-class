import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { students } from './reducers';
import { rootSaga } from './sagas';

const classApp = combineReducers({ students });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(classApp, {}, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export { store };

/**
 * Current state shape:
 * {
 *    students: {
 *      isAdding: bool,
 *      addError: error,
 *      items: [
 *        { id: integer, firstname: string, lastname: string },
 *      ],
 *    }
 * }
 */
