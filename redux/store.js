"use client";

import { configureStore } from "@reduxjs/toolkit";
import { defaultSlice } from "./defaultSlice.js";
import { walletSlice } from "./walletSlice.js";

export const store = configureStore({
  reducer: {
    default: defaultSlice.reducer,
    wallet: walletSlice.reducer,
  },
});
