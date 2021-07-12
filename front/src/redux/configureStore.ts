import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import ReduxThunk from "redux-thunk";
import * as ReduxDevtoolsExtension from "redux-devtools-extension";

import loginReducer from "./reducers/loginReducer";
import postsReducer from "./reducers/postsReducer";
import uiReducer from "./reducers/uiReducer";
import postCommentsReducer from "./reducers/postCommentsReducer";

const reducers = {
  login: loginReducer,
  posts: postsReducer,
  postComments: postCommentsReducer,
  ui: uiReducer,
};

const rootReducer = Redux.combineReducers(reducers);
const middlewares = Redux.applyMiddleware(ReduxThunk);
const enhancers = ReduxDevtoolsExtension.composeWithDevTools(middlewares);
const store = Redux.createStore(rootReducer, enhancers);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: ReactRedux.TypedUseSelectorHook<RootState> =
  ReactRedux.useSelector;

export const useAppDispatch = () => ReactRedux.useDispatch();

export default store;
