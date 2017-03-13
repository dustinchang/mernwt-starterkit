import * as React from "react";
import * as ReactDOM from "react-dom";
import Main from "./components/Main";
import generateStore, {history} from "./Store";
import routes from "./Routes";
import {Router} from "react-router";
import {Provider} from "react-redux";

const store = generateStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  //<Main compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
