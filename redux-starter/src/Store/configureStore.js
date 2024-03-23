import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import taskReducer from "./task";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const store = createStore(taskReducer, enhancer);

export default store;
