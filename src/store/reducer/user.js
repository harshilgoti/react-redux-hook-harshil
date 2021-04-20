import {
  FETCH_ALL_USER_LIST,
  FETCH_ALL_USER_LIST_SUCCESS,
  FETCH_ALL_USER_LIST_FAILURE,
} from "../action/actionType";

let initialState = {
  userLoading: false,
  user: null,
  userError: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USER_LIST:
      return {
        ...state,
        userLoading: true,
        userError: "",
      };
    case FETCH_ALL_USER_LIST_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: { name: "harshil" },
      };
    case FETCH_ALL_USER_LIST_FAILURE:
      return {
        ...state,
        userLoading: false,
        userError: "",
      };

    default:
      return state;
  }
};

export default user;
