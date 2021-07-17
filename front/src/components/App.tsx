import React from "react";
import { Provider } from "react-redux";

import Routes from "./Routes";

import store from "../redux/configureStore";
import Header from "./layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar/SideBar";
import PedidosEmissao from "./pages/pedidosEmissao";
import PedidosGerencia from "./pages/pedidosGerencia";
import PedidosVisualiza from "./pages/pedidosVisualiza";
import { ClickAwayListener } from "@material-ui/core/";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Sidebar />

        <div style={{ maxWidth: "960px", margin: "auto" }}>
          <Switch>
            <Route path="/emissao" exact component={PedidosEmissao} />
            <Route path="/gerencia" exact component={PedidosGerencia} />
            <Route path="/visualiza" exact component={PedidosVisualiza} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
