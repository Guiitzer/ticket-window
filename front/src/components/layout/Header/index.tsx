import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/configureStore";
import { clearGithubUser } from "../../../redux/reducers/loginReducer";

function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.login.user);

  return (
    <header className="header">
      <div className="logo">Hey</div>
    </header>
  );
}

export default Header;
