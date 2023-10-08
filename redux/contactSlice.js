import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setSelectedContact: (state, action) => {
      state.contact = action.payload;
    },
    clearSelectedContact: () => null,
  },
});

export const { setSelectedContact, clearSelectedContact } =
  contactSlice.actions;
