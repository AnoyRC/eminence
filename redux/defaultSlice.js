import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 5,
};

export const defaultSlice = createSlice({
  name: 'default',
  initialState,
  reducers: {
    next: (state) => {
      state.currentStep += 1;
    },
    previous: (state) => {
      state.currentStep -= 1;
    },
  },
});

export const { next, previous } = defaultSlice.actions;
