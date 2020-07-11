import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer
});

const ConnectedApp = () => (
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);

const rootElement = document.getElementById("root");

ReactDOM.render(<ConnectedApp />, rootElement);
