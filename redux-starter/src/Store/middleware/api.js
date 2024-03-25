import axios from "axios";
import { apiCallBegan } from "../api";

// Action Object for API
// {
//   type: "fetchTasks",
//   payload: {
//    url: "/tasks",
//    method: "GET",
//    data: {},
//    onSuccess: "getTasks",
//    onError: "SHOW_ERROR",
//   }
// }

const api = (store) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) {
    return next(action);
  }
  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) store.dispatch({ type: onStart });
  try {
    const response = await axios.request({
      baseURL: "http://localhost:5000/api",
      url,
      method,
      data,
    });
    console.log("Response: ", response.data);
    store.dispatch({ type: onSuccess, payload: { tasks: response.data } });
  } catch (error) {
    store.dispatch({ type: onError, payload: { error: error.message } });
    store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
  }

  //   axios
  //     .request({
  //       baseURL: "http://localhost:5000/api",
  //       url,
  //       method,
  //       data,
  //     })
  //     .then((response) => {
  //       store.dispatch({ type: onSuccess, payload: response.data });
  //     })
  //     .catch((error) => {
  //       store.dispatch({ type: onError, payload: error.message });
  //     });
};

export default api;
