import React from "react";
import { Redirect } from "react-router-dom";

import { ReactComponent as GithubLogo } from "../../../assets/img/github-logo.svg";
import { PATHS } from "../../../config/paths";
import { useAppDispatch, useAppSelector } from "../../../redux/configureStore";
import { getGithubUserApi } from "../../../redux/reducers/loginReducer";

function Login() {
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
    return <Redirect to={PATHS.FEED} />;
  }

  return (
    <section className="login">
      <div className="login-box">
        <div className="github-logo">
          <GithubLogo />
        </div>

        {loginState.status === "loading" && <span>Carregando</span>}
        {loginState.status === "error" && <span>Algo deu errado</span>}

        <input
          className="github-input"
          type="text"
          placeholder="Type your GitHub user"
          onChange={handleChange}
          value={inputText}
        />
        <button
          className="github-button"
          onClick={handleClick}
          disabled={!inputText || loginState.status === "loading"}
        >
          Login
        </button>
      </div>
    </section>
  );
}

export default Login;
