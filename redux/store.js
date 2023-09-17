"use client";

import { configureStore } from "@reduxjs/toolkit";
import { defaultSlice } from "./defaultSlice.js";

export const store = configureStore({
  reducer: {
    default: defaultSlice.reducer,
  },
});
