// for exchanging crypto currency from portfolio
import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    name: "tether",
    value: "375",
    color: "#E41B17",
  },
  {
    name: "luna",
    value: "375",
    color: "#16F529",
  },
  {
    name: "ethereum",
    value: "250",
    color: "#6698FF",
  },
];

const coinSlice = createSlice({
  name: "cryptoPortfolio",
  initialState,
  reducers: {
    buycoin: (state, action) => {
      const { name, value } = action.payload;
      const existingCrypto = state.find((crypto) => crypto.name === name);
      if (existingCrypto) {
        existingCrypto.value = parseInt(existingCrypto.value) + parseInt(value);
      } else {
        state.push(action.payload);
      }
    },
    sellcoin: (state, action) => {
      const { name, value } = action.payload;
      const existingCrypto = state.find((crypto) => crypto.name === name);
      if (existingCrypto) {
        existingCrypto.value = parseInt(existingCrypto.value) - parseInt(value);
      }
      const index = state.indexOf(state.find((crypto) => crypto.value === 0));
      if (index >= 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const { buycoin, sellcoin } = coinSlice.actions;
export default coinSlice.reducer;
