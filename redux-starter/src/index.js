import store from "./Store/configureStore";
import { addTask, completeTask, removeTask, fetchTodos } from "./Store/task";

//subscribe
const unsubscribe = store.subscribe(() => {
  console.log("State updated ", store.getState());
});

//store.dispatch({type, payload})
store.dispatch(addTask("Walk the dog"));
console.log(store.getState());
store.dispatch(addTask("Walk the dog 2"));
console.log(store.getState());
store.dispatch(completeTask(1));
store.dispatch(removeTask(1));
console.log(store.getState());

store.dispatch(fetchTodos());
console.log(store.getState());


// unsubscribe();
