import { Post, PostsState } from "./interfaces";
import postsAPI from "./api";
import { replacePost } from "./helpers";

import { POST_COMMENTS_ACTION_TYPES } from "../postCommentsReducer";

const POSTS_ACTION_TYPES = {
  GET_POSTS: "@postsReducer/GET_POSTS",
  GET_POSTS_SUCCESS: "@postsReducer/GET_POSTS_SUCCESS",
  GET_POSTS_ERROR: "@postsReducer/GET_POSTS_ERROR",
};

const INITIAL_STATE: PostsState = {
  status: "idle",
  posts: [],
};

export default function postsReducer(
  state = INITIAL_STATE,
  action
): PostsState {
  console.log("postsReducer ativado");
  switch (action.type) {
    case POSTS_ACTION_TYPES.GET_POSTS: {
      return {
        ...state,
        status: action.payload.status,
        posts: action.payload.posts,
      };
    }

    case POSTS_ACTION_TYPES.GET_POSTS_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
        posts: action.payload.posts,
      };
    }

    case POSTS_ACTION_TYPES.GET_POSTS_ERROR: {
      return {
        ...state,
        status: action.payload.status,
        posts: action.payload.posts,
      };
    }

    case POST_COMMENTS_ACTION_TYPES.SEND_COMMENT_SUCCESS: {
      return {
        ...state,
        posts: replacePost(state, action),
      };
    }

    default:
      return state;
  }
}

export function getPostsApi() {
  return async (dispatch) => {
    try {
      dispatch(getPosts());

      const posts = await postsAPI.getPosts();
      dispatch(getPostsSuccess(posts));
    } catch (error) {
      dispatch(getPostsError());
      console.log(error);
    }
  };
}

function getPosts() {
  return {
    type: POSTS_ACTION_TYPES.GET_POSTS,
    payload: {
      status: "loading",
      posts: [],
    },
  };
}

function getPostsSuccess(posts: Post[]) {
  return {
    type: POSTS_ACTION_TYPES.GET_POSTS_SUCCESS,
    payload: {
      status: "success",
      posts: posts,
    },
  };
}

function getPostsError() {
  return {
    type: POSTS_ACTION_TYPES.GET_POSTS_ERROR,
    payload: {
      status: "error",
      posts: [],
    },
  };
}
