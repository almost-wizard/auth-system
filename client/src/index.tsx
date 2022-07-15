import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import { store } from "./store";

const rootElement = document.getElementById("root");

if(!rootElement) {
  throw new Error('root not found')
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
