import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
