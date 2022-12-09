import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/exchangeCoin";
import currencyReducer from "../features/currency";

export const store = configureStore({
  reducer: {
    cryptoPortfolio: coinReducer,
    defaultCurrency: currencyReducer,
  },
});
