// for currency like inr, usd etc

// for exchanging crypto currency from portfolio
import { createSlice } from "@reduxjs/toolkit";

let initialState = ["usd"];

const currencySlice = createSlice({
  name: "defaultCurrency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
