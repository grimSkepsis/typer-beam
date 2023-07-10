import { configureStore } from "@reduxjs/toolkit";
import typeTesterReducer from "./typeTester/slice";
const store = configureStore({
  reducer: {
    typeTester: typeTesterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: "",
      },
    }),
});

export default store;
