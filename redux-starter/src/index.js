import store from "./Store/configureStore";
import axios from "axios";
import { addEmployee } from "./Store/employee";
import { addTask, completeTask, removeTask, getTasks } from "./Store/task";

const gettingTasks = async () => {
  //calling api
  //fetch or axios
  const response = await axios
    .get("http://localhost:5000/api/tasks")
    .then((response) => {
      console.log(response.data);
      store.dispatch(getTasks({ tasks: response.data }));
    })
    .catch((error) => {
      console.log(error);
    });
};

gettingTasks();
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
