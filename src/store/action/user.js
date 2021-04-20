import {
  FETCH_ALL_USER_LIST,
  FETCH_ALL_USER_LIST_SUCCESS,
  FETCH_ALL_USER_LIST_FAILURE,
} from "./actionType";

export const fetchUser = (payload) => {
  return {
    type: FETCH_ALL_USER_LIST,
    payload: payload,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_ALL_USER_LIST_SUCCESS,
    payload: payload,
  };
};

export const fetchUserFailure = (payload) => {
  return {
    type: FETCH_ALL_USER_LIST_FAILURE,
    payload: payload,
  };
};
export const getUser = () => async (dispatch) => {
  dispatch(fetchUser());

  setTimeout(() => {
    dispatch(fetchUserSuccess());
  }, 1000);
};
