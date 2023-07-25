import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CompletionState,
  TypeTesterState,
  timeBreakdownToMilliseconds,
} from "./types";
import { RecordUserPerformance } from "@/services/performanceTracking";

export const completeTypeTesterSample = createAsyncThunk(
  "typeTester/complete",
  async ({ time, ...rest }: CompletionState, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    return RecordUserPerformance({
      ...rest,
      timeToComplete: timeBreakdownToMilliseconds(time),
    });
  }
);
