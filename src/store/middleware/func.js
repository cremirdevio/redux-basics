// This example explains how to create a middleware
// that performs an asynchronous task
// An npm library for this function is 'thunk'
const func =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") action(dispatch, getState);
    else next(action);
  };

export default func;
