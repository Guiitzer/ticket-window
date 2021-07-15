import React from "react";
import { Redirect } from "react-router";
import { PATHS } from "../../../config/paths";
import { useAppSelector } from "../../../redux/configureStore";
import Posts from "./Posts";
import ProfileSidebar from "./ProfileSidebar";

function Feed() {
  const user = useAppSelector((state) => state.login.user);

  if (!user) {
    return <Redirect to={PATHS.ROOT} />;
  }

  return (
    <section className="feed">
      <Posts />
      <ProfileSidebar />
    </section>
  );
}

export default Feed;
