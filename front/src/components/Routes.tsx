import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PATHS } from "../config/paths";
import PedidosVisualiza from "./pages/pedidosVisualiza";
import PedidosGerencia from "./pages/pedidosGerencia";
import Socket from "./pages/Socket";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={PATHS.EMISSAOPEDIDOS}>
          <h1>CONTEUDO DA PAGINA EMISSÃO DE PEDIDOS</h1>
          <dl>
            <dd>Nome do Motoboy</dd>
            <dd>Numero do Pedido</dd>
            <dd>Plataforma</dd>
          </dl>
        </Route>

        <Route exact={true} path={PATHS.GERENCIAPEDIDOS}>
          <h1>CONTEUDO DA PAGINA GERENCIAMENTO DE PEDIDOS</h1>
          <dl>
            <dd>Exibição de todos os pedidos</dd>
            <dd>Controle (conclusão de entrega) de pedidos</dd>
          </dl>
        </Route>

        <Route exact={true} path={PATHS.VISUALIZAPEDIDOS}>
          <h1>CONTEUDO DA PAGINA VIZUALIZAÇÃO DE PEDIDOS</h1>
          <ul>
            <li>Exibição de todos os pedidos prontos para retirada</li>
            <li>Chamada do pedido pronto para retirada</li>
            <li>RE-chamada a cada 2 minutos do pedido pronto para retirada</li>
          </ul>
        </Route>

        <Route exact={true} path={`/socket`}>
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
