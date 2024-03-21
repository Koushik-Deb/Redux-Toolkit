import { ADD_TASK, REMOVE_TASK } from "../TYPES";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: { task },
  };
};
export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: { id },
  };
};

export const completeTask = (id) => {
  return {
    type: "TASK_COMPLETED",
    payload: { id },
  };
};
