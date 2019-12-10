import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";

// Import the reducer and create a store
import { reducer } from "./TodoListRedux";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(AppWithStore, document.querySelector("#root"));
