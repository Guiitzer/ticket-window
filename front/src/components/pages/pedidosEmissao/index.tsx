import React from "react";
import { Redirect } from "react-router-dom";

import { ReactComponent as GithubLogo } from "../../../assets/img/github-logo.svg";
import { PATHS } from "../../../config/paths";
import { useAppDispatch, useAppSelector } from "../../../redux/configureStore";
import { getGithubUserApi } from "../../../redux/reducers/loginReducer";

function PedidosEmissao() {
  const dispatch = useAppDispatch();

  const loginState = useAppSelector((state) => state.login);
  const [inputText, setInputText] = React.useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputText(value);
  }

  function handleClick() {
    console.log("botão login clicado");
    dispatch(getGithubUserApi(inputText));
  }

  if (loginState.user) {
    return <Redirect to={PATHS.ROOT} />;
  }

  return <h1>PedidosEmissao</h1>;
}

export default PedidosEmissao;
