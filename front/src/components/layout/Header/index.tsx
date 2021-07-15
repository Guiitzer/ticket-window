import React from "react";
import FacebookLogo from "../../../assets/img/facebook-logo.svg";
import { useAppDispatch, useAppSelector } from "../../../redux/configureStore";
import { clearGithubUser } from "../../../redux/reducers/loginReducer";

function Header() {
    return (
    <header className="header">
      <div className="logo">
        <img src={FacebookLogo} alt="Facebook Logo" />
      </div>
    </header>
  );
}

export default Header;
