import React from "react";
import ReactDOM from "react-dom";
import Recipe from "./Recipe.jsx";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Context from "./Context";
import CartPage from "./CartPage.js";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      {/* <BrowserRouter>
      <Switch>
        <Route exact path="/"> */}
      <App />
      {/* </Route>

        <Route path="/recipe">
          <Recipe />
        </Route>
      </Switch>
    </BrowserRouter> */}
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
