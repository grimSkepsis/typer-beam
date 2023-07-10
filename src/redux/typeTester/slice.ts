import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../types";
import { TypeTesterState } from "./types";
import { completeTypeTesterSample } from "./thunks";

const initialState: TypeTesterState = {
  userText: "",
  mistakeLength: 0,
  totalKeyStrokes: 0,
  totalMistakes: 0,
  isComplete: false,
  currMistakeLength: 0,
};

const typeTesterSlice = createSlice({
  name: "typeTester",
  initialState,
  reducers: {
    setUserText: (state, action: PayloadAction<string>) => {
      state.userText = action.payload;
    },
    setMistakeLength: (state, action: PayloadAction<number>) => {
      state.mistakeLength = action.payload;
    },
    setTotalKeyStrokes: (state, action: PayloadAction<number>) => {
      state.totalKeyStrokes = action.payload;
    },
    setTotalMistakes: (state, action: PayloadAction<number>) => {
      state.totalMistakes = action.payload;
    },
    setIsComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload;
    },
    setCurrentMistakeLength: (state, action: PayloadAction<number>) => {
      state.currMistakeLength = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(completeTypeTesterSample.pending, (state, action) => {});
    builder.addCase(completeTypeTesterSample.fulfilled, (state, action) => {
      state.isComplete = true;
      console.log("EXTRA REDUCERS ", action.payload);
    });
    builder.addCase(completeTypeTesterSample.rejected, (state, action) => {});
  },
});

export const {
  setUserText,
  setMistakeLength,
  setTotalKeyStrokes,
  setTotalMistakes,
  setIsComplete,
  setCurrentMistakeLength,
} = typeTesterSlice.actions;

export const selectTypeTesterState = (state: AppState) => state.typeTester;

export default typeTesterSlice.reducer;
