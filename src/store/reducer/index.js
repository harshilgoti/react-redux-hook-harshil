import { combineReducers } from "redux";
import user from "./user";

const appReducer = combineReducers({ user });

const rootReducer = (state, action) => {
  if (action.type === "AUTH_USER_LOGOUT_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
