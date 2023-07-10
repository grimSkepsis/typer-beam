import { createAsyncThunk } from "@reduxjs/toolkit";
import { CompletionState, TypeTesterState } from "./types";

export const completeTypeTesterSample = createAsyncThunk(
  "typeTester/complete",
  async (completionState: CompletionState, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const state = getState() as { typeTester: TypeTesterState };
    console.log("COMPLETE IN THUNK ", completionState);
    return Promise.resolve({ result: "SOME STUFF" });
  }
);
