// Action Types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TASK_COMPLETED = "TASK_COMPLETED";

// Actions
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


// Reducer 
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
