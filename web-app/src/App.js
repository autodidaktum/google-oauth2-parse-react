import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Env from "./environment";

import { Provider } from "react-redux";

import Routes from "./routers/Routes";
import store from "./redux/store";

import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
