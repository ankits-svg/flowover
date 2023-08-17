import { applyMiddleware, legacy_createStore } from "redux";
import { authreducer } from "./reducer/authreducer";
import thunk from 'redux-thunk'

export const store=legacy_createStore(authreducer,applyMiddleware(thunk))