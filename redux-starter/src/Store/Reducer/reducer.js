import { ADD_TASK, REMOVE_TASK, TASK_COMPLETED } from "../TYPES";

const initialState = [];
let id = 0;
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case TASK_COMPLETED:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    case REMOVE_TASK:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }

  //   if (action.type === ADD_TASK) {
  //     return [
  //       ...state,
  //       {
  //         id: ++id,
  //         task: action.payload.task,
  //         completed: false,
  //       },
  //     ];
  //   } else if (action.type === REMOVE_TASK) {
  //     return state.filter((todo) => todo.id !== action.payload.id);
  //   }
  //   else{
  //     return state;
  //   }
}
