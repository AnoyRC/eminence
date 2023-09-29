import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const { setHistory } = graphSlice.actions;
