import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userslice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
