import React from "react";

import FacebookLogo from "../../../assets/img/facebook-logo.svg";
import { useAppDispatch, useAppSelector } from "../../../redux/configureStore";
import { clearGithubUser } from "../../../redux/reducers/loginReducer";

function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.login.user);

  function handleLogout() {
    dispatch(clearGithubUser());
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={FacebookLogo} alt="Facebook Logo" />
      </div>
      {user && (
        <div className="logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
}

export default Header;
