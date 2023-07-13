import { CreateWritingSample } from "@/services/samples";
import { CreateWritingSampleInput } from "@/services/samples/type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSample = createAsyncThunk(
  "sampleManagement/createSample",
  async (sampleData: CreateWritingSampleInput, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    try {
      const sample = await CreateWritingSample(sampleData);
      console.log("SAMPLE RETURNED:", sample);
    } catch (e) {
      console.log("There was an error submitting the sample.");
    }
  }
);
