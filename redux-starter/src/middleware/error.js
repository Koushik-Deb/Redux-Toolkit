const error = (store) => (next) => (action) => {
  if (action.type === "SHOW_ERROR") {
    console.log("Toastify: ", action.payload.message);
  } else {
    next(action);
  }
};

export default error;
