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
  if (action.type !== "apiRequest") {
    return next(action);
  }
  const { url, method, data, onSuccess, onError } = action.payload;
  console.log("what the hell is going on here: ", action.payload);
  try {
    const response = await axios.request({
      baseURL: "http://localhost:5000/api",
      url,
      method,
      data,
    });
    console.log("Response: ", response.data);
    store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    store.dispatch({ type: onError, payload: { error: error.message } });
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
