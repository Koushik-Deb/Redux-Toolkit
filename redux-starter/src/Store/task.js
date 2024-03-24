import { createSlice } from "@reduxjs/toolkit";

// Reducer // Create Slice
let id = 0;

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    getTasks: (state, action) => {
      return action.payload.tasks;
    },
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completeTask: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTask, removeTask, completeTask, getTasks } =
  taskSlice.actions;
export default taskSlice.reducer;

// Action Types
// const ADD_TASK = "ADD_TASK";
// const REMOVE_TASK = "REMOVE_TASK";
// const TASK_COMPLETED = "TASK_COMPLETED";

// Actions
// export const addTask = createAction(ADD_TASK);
// export const removeTask = createAction(REMOVE_TASK);
// export const completeTask = createAction(TASK_COMPLETED);
// export const fetchTodos = () => async (dispatch, getState) => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   dispatch(addTask(data.title));
// };

// Reducer

// let id = 0;

// export default createReducer([], (builder) => {
//   builder.addCase(ADD_TASK, (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload,
//       completed: false,
//     });
//   });
//   builder.addCase(REMOVE_TASK, (state, action) => {
//     return state.filter((todo) => todo.id !== action.payload);
//   });
//   builder.addCase(TASK_COMPLETED, (state, action) => {
//     return state.map((todo) => {
//       if (todo.id === action.payload) {
//         return {
//           ...todo,
//           completed: true,
//         };
//       }
//       return todo;
//     });
//   });
// });
