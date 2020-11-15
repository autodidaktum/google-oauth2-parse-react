import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import User from "../pages/User";
import AuthRedirect from "../pages/AuthRedirect";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/redirect' component={AuthRedirect} />
          <PrivateRoute exact path='/user' component={User} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
