import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
};

export const defaultSlice = createSlice({
  name: "default",
  initialState,
  reducers: {
    increment: (state) => {
      state.currentStep += 1;
    },
    decrement: (state) => {
      state.currentStep -= 1;
    },
  },
});

export const { increment, decrement } = defaultSlice.actions;
