import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";
//surround the App cmp like below

import { Provider } from "react-redux";

import { store, persistor } from "./redux/store";
//make sure to create persistor in the store folder.

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
