import { Post, PostsState } from "./interfaces";

export function replacePost(state: PostsState, action): Post[] {
  const newPosts = state.posts.map((post) => {
    if (post.id === action.payload.post.id) {
      return action.payload.post;
    }

    return post;
  });

  return newPosts;
}
