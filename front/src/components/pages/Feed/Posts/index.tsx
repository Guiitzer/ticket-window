import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/configureStore";
import { getPostsApi } from "../../../../redux/reducers/postsReducer";

import Post from "./Post";

function Posts() {
  const dispatch = useAppDispatch();
  const postsState = useAppSelector((state) => state.posts);

  React.useEffect(() => {
    dispatch(getPostsApi());
  }, [dispatch]);

  return (
    <div className="posts">
      <div className="container">
        {postsState.status === "loading" && <h1>CARREGANDO...</h1>}
        {postsState.status === "error" && <h1>ERRO...</h1>}

        {postsState.posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Posts;
