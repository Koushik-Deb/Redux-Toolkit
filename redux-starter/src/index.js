import store from "./Store/configureStore";

import axios from "axios";
import { addEmployee } from "./Store/employee";
import {
  addTask,
  completeTask,
  removeTask,
  getTasks,
  fetchTasks,
  loadTasks,
  addNewTask,
  updateTaskToComplete,
  deleteTask,
} from "./Store/task";

//create async thunk

// store.dispatch(fetchTasks());

//async method with api middleware

store.dispatch(loadTasks());
// store.dispatch(addNewTask({ task: "Go to sleep" }));
// store.dispatch(updateTaskToComplete({ id: 6, completed: true }));
store.dispatch(deleteTask({ id: 6 }));

// store.dispatch({
//   type: "apiRequest",
//   payload: {
//     url: "/tasks",
//     method: "GET",
//     onStart: "tasks/apiRequested",
//     onSuccess: "tasks/getTasks",
//     onError: "tasks/apiRequestedFailed",
//   },
// });

// const gettingTasks = async () => {
//   //calling api
//   //fetch or axios
//   const response = await axios
//     .get("http://localhost:5000/api/tasks")
//     .then((response) => {
//       console.log(response.data);
//       store.dispatch(getTasks({ tasks: response.data }));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// gettingTasks();

// //subscribe
// const unsubscribe = store.subscribe(() => {
//   console.log("State updated ", store.getState());
// });

// store.dispatch(addTask({ task: "Walk the dog" }));
// store.dispatch(addTask({ task: "Walk the dog 2" }));
// console.log(store.getState());

// store.dispatch(completeTask({ id: 1 }));
// console.log(store.getState());

// store.dispatch(addEmployee({ name: "John", age: 25 }));
// store.dispatch({ type: "SHOW_ERROR", payload: { message: "Error" } });
// console.log(store.getState());

//store.dispatch({type, payload})
// store.dispatch(addTask("Walk the dog"));
// console.log(store.getState());
// store.dispatch(addTask("Walk the dog 2"));
// console.log(store.getState());
// store.dispatch(completeTask(1));
// store.dispatch(removeTask(1));
// console.log(store.getState());

// store.dispatch(fetchTodos());
// console.log(store.getState());

// unsubscribe();
