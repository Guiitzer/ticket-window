import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PATHS } from "../config/paths";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Socket from "./pages/Socket";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={PATHS.ROOT}>
          <h1>Root</h1>
        </Route>

        <Route path={PATHS.LOGIN}>
          <Login />
        </Route>

        <Route path={PATHS.FEED}>
          <Feed />
        </Route>

        <Route path={`/socket`}>
          <Socket />
        </Route>

        <Route>
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
