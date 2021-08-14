import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import reducer from "./reducer.js";
import withTaskQuery from "./Task.query.jsx";
import Task from "./Task.jsx";

const store = createStore(reducer);
const WrappedTask = withTaskQuery(Task);

const TaskIndex = () => (
  <Provider store={store}>
    <WrappedTask />
  </Provider>
);

export default TaskIndex;
