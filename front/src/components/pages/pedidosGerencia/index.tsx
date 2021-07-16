import React from "react";
import { Redirect } from "react-router-dom";

import { ReactComponent as GithubLogo } from "../../../assets/img/github-logo.svg";
import { PATHS } from "../../../config/paths";
import { useAppDispatch, useAppSelector } from "../../../redux/configureStore";
import { getGithubUserApi } from "../../../redux/reducers/loginReducer";

function PedidosGerencia() {
  // const dispatch = useAppDispatch();

  // const loginState = useAppSelector((state) => state.login);
  // const [inputText, setInputText] = React.useState("");

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const value = event.target.value;
  //   setInputText(value);
  // }

  // function handleClick() {
  //   console.log("botão login clicado");
  //   dispatch(getGithubUserApi(inputText));
  // }

  // if (loginState.user) {
  //   return <Redirect to={PATHS.ROOT} />;
  // }

  return (
    <>
      <h1>CONTEUDO DA PAGINA GERENCIAMENTO DE PEDIDOS</h1>
      <dl>
        <dd>Exibição de todos os pedidos</dd>
        <dd>Controle (conclusão de entrega) de pedidos</dd>
      </dl>
    </>
  );
}

export default PedidosGerencia;
