// for exchanging crypto currency from portfolio
import { createSlice } from "@reduxjs/toolkit";

let initialState = ["ethereum"];

const selectCoinSlice = createSlice({
  name: "selectCoin",
  initialState,
  reducers: {
    selectCoin: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { selectCoin } = selectCoinSlice.actions;
export default selectCoinSlice.reducer;
