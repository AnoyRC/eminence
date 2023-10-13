import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: null,
  chatId: null,
  messages: [],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setSelectedContact: (state, action) => {
      state.contact = action.payload;
    },

    addContact: (state, action) => {
      state.contact.push(action.payload);
    },

    clearSelectedContact: () => null,

    setChatId: (state, action) => {
      state.chatId = action.payload;
    },

    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  setSelectedContact,
  addContact,
  clearSelectedContact,
  setChatId,
  addMessage,
  setMessages,
} = contactSlice.actions;
