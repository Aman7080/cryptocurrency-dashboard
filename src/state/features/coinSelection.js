// for exchanging crypto currency from portfolio
import { createSlice } from "@reduxjs/toolkit";

let initialState = ["ethereum"];

const selectCoinSlice = createSlice({
  name: "selectCoin",
  initialState,
  reducers: {
    selectCoin: (state, action) => {
      state.push(action.payload[action.payload.length - 1]);
    },
    removecoin: (state, action) => {
      // state.splice(state.indexOf(action.payload), 1);
      return [...action.payload];
    },
  },
});

export const { selectCoin, removecoin } = selectCoinSlice.actions;
export default selectCoinSlice.reducer;
