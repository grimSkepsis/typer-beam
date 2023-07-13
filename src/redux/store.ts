import { configureStore } from "@reduxjs/toolkit";
import typeTesterReducer from "./typeTester/slice";
import sampleMangementReducer from "./sampleManagement/slice";
const store = configureStore({
  reducer: {
    typeTester: typeTesterReducer,
    sampleManagement: sampleMangementReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: "",
      },
    }),
});

export default store;
