import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import profileReducer from "./reducers/profileReducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
