import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../types";
import { SampleManagementState } from "./types";
import { createSample } from "./thunks";

const getInitialState: () => SampleManagementState = () => {
  return {};
};

const sampleManagmentSlice = createSlice({
  name: "sampleManagement",
  initialState: getInitialState(),

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createSample.pending, (state, action) => {});
    builder.addCase(createSample.fulfilled, (state, action) => {
      console.log("SAMPLE SUBMITTED extra reducers");
    });
    builder.addCase(createSample.rejected, (state, action) => {});
  },
});

export const {} = sampleManagmentSlice.actions;

export const selectSampleManagement = (state: AppState) =>
  state.sampleManagement;

export default sampleManagmentSlice.reducer;
