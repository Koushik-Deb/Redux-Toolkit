import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task";
const store = configureStore({ reducer: taskReducer });

export default store;
