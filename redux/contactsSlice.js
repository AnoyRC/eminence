import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopup: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    togglePopup: (state, action) => {
      state.isPopup = action.payload;
    },
  },
});

export const { setLogin, togglePopup } = contactsSlice.actions;
