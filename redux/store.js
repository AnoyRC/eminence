"use client";

import { configureStore } from "@reduxjs/toolkit";
import { defaultSlice } from "./defaultSlice.js";
import { walletSlice } from "./walletSlice.js";
import { toastSlice } from "./toastSlice.js";

export const store = configureStore({
  reducer: {
    default: defaultSlice.reducer,
    wallet: walletSlice.reducer,
    toast: toastSlice.reducer,
  },
});
