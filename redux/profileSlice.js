import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  connection: "https://solana-mainnet.rpc.extrnode.com",
  balance: 0,
  balanceUSDC: 0,
  balanceListerners: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setDevnet: (state) => {
      state.connection = "https://api.devnet.solana.com";
    },
    setMainnet: (state) => {
      state.connection = "https://solana-mainnet.rpc.extrnode.com";
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setBalanceUSDC: (state, action) => {
      state.balanceUSDC = action.payload;
    },
    addBalanceListener: (state, action) => {
      state.balanceListerners.push(action.payload);
    },
    removeAllBalanceListeners: (state) => {
      state.balanceListerners = [];
    },
  },
});

export const {
  setUser,
  setDevnet,
  setMainnet,
  setBalance,
  setBalanceUSDC,
  addBalanceListener,
  removeAllBalanceListeners,
} = profileSlice.actions;
