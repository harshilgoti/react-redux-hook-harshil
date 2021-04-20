import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./actionType";

export const fetchUser = (payload) => {
  return {
    type: FETCH_USER,
    payload: payload,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: payload,
  };
};

export const fetchUserFailure = (payload) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: payload,
  };
};
export const getUser = () => async (dispatch) => {
  dispatch(fetchUser());

  setTimeout(() => {
    dispatch(fetchUserSuccess());
  }, 1000);
};
