import React from "react";
import { Redirect } from "react-router";
import { PATHS } from "../../../config/paths";
import { useAppSelector } from "../../../redux/configureStore";
import Posts from "./Posts";
import ProfileSidebar from "./ProfileSidebar";

function PedidosVisualiza() {
  return (
    <>
      <h1>CONTEUDO DA PAGINA VIZUALIZAÇÃO DE PEDIDOS</h1>
      <ul>
        <li>Exibição de todos os pedidos prontos para retirada</li>
        <li>Chamada do pedido pronto para retirada</li>
        <li>RE-chamada a cada 2 minutos do pedido pronto para retirada</li>
      </ul>
    </>
  );
}

export default PedidosVisualiza;
