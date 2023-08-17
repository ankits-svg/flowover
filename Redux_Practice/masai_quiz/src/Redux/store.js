import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {quizReducer} from './reducers/quizReducer';

const store = legacy_createStore(quizReducer, applyMiddleware(thunk));

export default store;
