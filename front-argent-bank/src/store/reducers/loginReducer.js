const initialState = { isAuth: false, token: null, error: null };
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: true,
        token: action.payload,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isAuth: false,
        token: null,
        error: "Unknow user",
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export default loginReducer;