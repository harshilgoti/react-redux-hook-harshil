import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../action/actionType";

let initialState = {
  userLoading: false,
  user: null,
  userError: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        userLoading: true,
        userError: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: { name: "Harshil goti" },
      };
    case FETCH_USER_FAILURE:
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
