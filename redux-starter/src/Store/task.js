import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Reducer // Create Slice
let id = 0;
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  const response = await axios.get("http://localhost:5000/api/tasks");
  return { tasks: response.data };
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      return state.tasks.filter((todo) => todo.id !== action.payload);
    },
    completeTask: (state, action) => {
      return state.tasks.map((todo) => {
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
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
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
