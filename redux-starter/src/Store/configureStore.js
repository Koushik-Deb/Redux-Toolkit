import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task";
import employeeReducer from "./employee";
// import log from "./middleware/log";
import logger from "redux-logger";
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(api).concat(error),
});

export default store;
