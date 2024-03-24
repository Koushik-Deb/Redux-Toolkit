import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task";
import employeeReducer from "./employee";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
});

export default store;
