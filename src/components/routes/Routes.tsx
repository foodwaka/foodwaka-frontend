import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//components
import Welcome from "components/welcome";
import Home from "components/home";
import Login from "components/login";
import Register from "components/register";
import VerifyPhone from "components/verify-phone";
import SetPassword from "components/set-password";
import Store from "components/store";

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <>
      <Router history={history}>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/verify-phone" component={VerifyPhone} />
        <Route path="/set-password" component={SetPassword} />
        <Route path="/store" component={Store} />
      </Router>
    </>
  );
};

export default Routes;
