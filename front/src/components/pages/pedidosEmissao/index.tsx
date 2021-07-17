import React from "react";
import { Redirect } from "react-router-dom";

import { ReactComponent as GithubLogo } from "../../../assets/img/github-logo.svg";
import { PATHS } from "../../../config/paths";
import { useAppDispatch, useAppSelector } from "../../../redux/configureStore";
import { getGithubUserApi } from "../../../redux/reducers/loginReducer";
import FloatingActionButtonSize from "../../shared/FAB";

function PedidosEmissao() {
  const dispatch = useAppDispatch();

  const loginState = useAppSelector((state) => state.login);

  return (
    <>
      <h1>CONTEUDO DA PAGINA EMISSÃO DE PEDIDOS</h1>
      <ul>
        <li>Lista de pedidos</li>
        <li>Nome do Motoboy</li>
        <li>Numero do Pedido</li>
        <li>Plataforma</li>
        <FloatingActionButtonSize />
      </ul>
    </>
  );
}

export default PedidosEmissao;
