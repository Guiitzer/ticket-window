import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/configureStore";
import { clearGithubUser } from "../../../redux/reducers/loginReducer";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaBeer,
} from "react-icons/fa";

function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.login.user);

  return (
    <h3>
      Lets go for a <FaBeer />?
    </h3>
  );
}

export default Header;
