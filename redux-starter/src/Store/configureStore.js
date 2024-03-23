import { legacy_createStore as createStore } from "redux";
import taskReducer from "./task";

const store = createStore(taskReducer);

export default store;
