import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from "./task";

const store = createStore(taskReducer, applyMiddleware(thunk));

export default store;
