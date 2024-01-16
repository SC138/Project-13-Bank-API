const initialState = {
  message: null,
  body: {
    id: null,
    email: null,
    firstname: null,
    lastname: null,
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
          firstname: action.payload.body.firstname,
          lastname: action.payload.body.lastname,
        },
        isAuth: true,
      };
    case "PROFILE_ERROR":
      return {
        ...state,
        message: action.payload.message,
        body: {},
        isAuth: false,
      };
    default:
      return state;
  }
};
export default profileReducer;
