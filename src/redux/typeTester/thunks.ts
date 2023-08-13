import { createAsyncThunk } from "@reduxjs/toolkit";
import { CompletionState } from "./types";
import { RecordUserPerformance } from "@/services/performanceTracking";

export const completeTypeTesterSample = createAsyncThunk(
  "typeTester/complete",
  async (data: CompletionState, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    return RecordUserPerformance(data);
  }
);
