import { ADD_TASK, REMOVE_TASK } from "./Store/TYPES";
import store from "./Store/store";
import { addTask, completeTask, removeTask } from "./Store/Action/action";

//subscribe
const unsubscribe = store.subscribe(() => {
  console.log("State updated ", store.getState());
});

//store.dispatch({type, payload})
store.dispatch(addTask("Walk the dog"));
console.log(store.getState());
// store.dispatch(removeTask(1));
// console.log(store.getState());

store.dispatch(completeTask(1));

unsubscribe();
store.dispatch(addTask("Walk the dog 2"));
console.log(store.getState());
