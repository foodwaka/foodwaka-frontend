import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//components
import Welcome from "components/welcome";
import Home from "components/home";

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <>
      <Router history={history}>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
      </Router>
    </>
  );
};

export default Routes;
