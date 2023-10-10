import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
  weekStat: null,
};

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    setWeekStat: (state, action) => {
      state.weekStat = action.payload;
    },
  },
});

export const { setHistory, setWeekStat } = graphSlice.actions;
