import { User, LoginState } from "./interfaces";
import loginAPI from "./api";
import { parseUser } from "./helpers";

const LOGIN_ACTION_TYPES = {
  GET_GITHUB_USER: "@loginReducer/GET_GITHUB_USER",
  GET_GITHUB_USER_SUCCESS: "@loginReducer/GET_GITHUB_USER_SUCCESS",
  GET_GITHUB_USER_ERROR: "@loginReducer/GET_GITHUB_USER_ERROR",
  CLEAR_GITHUB_USER: "@loginReducer/CLEAR_GITHUB_USER",
};

const INITIAL_STATE: LoginState = {
  status: "idle",
  user: null,
};

export default function loginReducer(
  state = INITIAL_STATE,
  action
): LoginState {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.GET_GITHUB_USER: {
      return {
        ...state,
        status: action.payload.status,
        user: action.payload.user,
      };
    }

    case LOGIN_ACTION_TYPES.GET_GITHUB_USER_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
        user: action.payload.user,
      };
    }

    case LOGIN_ACTION_TYPES.GET_GITHUB_USER_ERROR: {
      return {
        ...state,
        status: action.payload.status,
        user: action.payload.user,
      };
    }

    case LOGIN_ACTION_TYPES.CLEAR_GITHUB_USER: {
      return {
        ...state,
        user: INITIAL_STATE.user,
      };
    }

    default:
      return state;
  }
}

export function getGithubUserApi(username: string) {
  return async (dispatch) => {
    try {
      const getGithubUserAction = getGithubUser();
      dispatch(getGithubUserAction);

      const githubUser = await loginAPI.getGithubUser(username);
      if (githubUser.login) {
        const user = parseUser(githubUser);
        console.log({ githubUser, user });
        const getGithubUserSuccessAction = getGithubUserSuccess(user);
        dispatch(getGithubUserSuccessAction);
      } else {
        throw Error("User not found");
      }
    } catch (error) {
      const getGithubUserErrorAction = getGithubUserError();
      dispatch(getGithubUserErrorAction);
      console.log(error);
    }
  };
}

function getGithubUser() {
  return {
    type: LOGIN_ACTION_TYPES.GET_GITHUB_USER,
    payload: {
      status: "loading",
      user: null,
    },
  };
}

function getGithubUserSuccess(user: User) {
  return {
    type: LOGIN_ACTION_TYPES.GET_GITHUB_USER_SUCCESS,
    payload: {
      status: "success",
      user: user,
    },
  };
}

function getGithubUserError() {
  return {
    type: LOGIN_ACTION_TYPES.GET_GITHUB_USER_ERROR,
    payload: {
      status: "error",
      user: null,
    },
  };
}

export function clearGithubUser() {
  return {
    type: LOGIN_ACTION_TYPES.CLEAR_GITHUB_USER,
  };
}
