import { PostCommentsState } from "./interfaces";
import postCommentsAPI from "./api";
import { createComment } from "./helpers";
import { Post } from "../postsReducer/interfaces";
import { RootState } from "../../configureStore";

export const POST_COMMENTS_ACTION_TYPES = {
  SEND_COMMENT: "@postCommentsReducer/SEND_COMMENT",
  SEND_COMMENT_SUCCESS: "@postCommentsReducer/SEND_COMMENT_SUCCESS",
  SEND_COMMENT_ERROR: "@postCommentsReducer/SEND_COMMENT_ERROR",
};

const INITIAL_STATE: PostCommentsState = {
  status: "idle",
};

export default function postCommentsReducer(
  state = INITIAL_STATE,
  action
): PostCommentsState {
  console.log("postCommentsReducer ativado");
  switch (action.type) {
    case POST_COMMENTS_ACTION_TYPES.SEND_COMMENT: {
      return {
        ...state,
        status: action.payload.status,
      };
    }

    case POST_COMMENTS_ACTION_TYPES.SEND_COMMENT_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
      };
    }

    case POST_COMMENTS_ACTION_TYPES.SEND_COMMENT_ERROR: {
      return {
        ...state,
        status: action.payload.status,
      };
    }

    default:
      return state;
  }
}

export function sendPostCommentApi(post: Post, comment: string) {
  return async (dispatch, getState) => {
    try {
      dispatch(sendComment());

      const state: RootState = getState();
      const newComment = createComment(state.login.user, comment);

      const newPost = { ...post };
      newPost.post.comments.push(newComment);

      const newPostResponse = await postCommentsAPI.sendComment(newPost);

      dispatch(sendCommentSuccess(newPostResponse));
    } catch (error) {
      dispatch(sendCommentError());
      console.log(error);
    }
  };
}

function sendComment() {
  return {
    type: POST_COMMENTS_ACTION_TYPES.SEND_COMMENT,
    payload: {
      status: "loading",
    },
  };
}

function sendCommentSuccess(post: Post) {
  return {
    type: POST_COMMENTS_ACTION_TYPES.SEND_COMMENT_SUCCESS,
    payload: {
      status: "success",
      post,
    },
  };
}

function sendCommentError() {
  return {
    type: POST_COMMENTS_ACTION_TYPES.SEND_COMMENT_ERROR,
    payload: {
      status: "error",
    },
  };
}
