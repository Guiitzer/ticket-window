import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PATHS } from "../config/paths";
import Container from "./layout/Container";
import Feed from "./pages/Feed";
import '../assets/css/container.css';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={PATHS.ROOT}>
          <div className="area-container">
          <Container name="Emissão de Pedidos" link="emissaopedidos" />
          <Container name="Gerenciamento de Pedidos" link="gerenciapedidos" />
          <Container name="Visualização de Pedidos" link="visualizapedidos" />
          </div>
        </Route>

        <Route path={PATHS.EMISSAO}>
          <div className="area-container">
          <Container name="Tela de Emissão de Pedidos" />
          </div>
        </Route>

        <Route path={PATHS.GERENCIA}>
          <div className="area-container">
          <Container name="Tela de Gerenciamento de Pedidos" />
          </div>
        </Route>

        <Route path={PATHS.VISUALIZA}>
          <div className="area-container">
          <Container name="Tela de Visualização de Pedidos" />
          </div>
        </Route>

        <Route>
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
