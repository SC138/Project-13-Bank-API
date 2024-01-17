const initialState = {
  message: null,
  body: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  isAuth: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_SUCCESS":
      return {
        ...state,
        message: action.payload.message,
        body: {
          id: action.payload.body.id,
          email: action.payload.body.email,
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
        },
        isAuth: true,
      };
    case "PROFILE_ERROR":
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
export default profileReducer;
