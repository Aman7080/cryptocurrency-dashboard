import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/exchangeCoin";
import currencyReducer from "../features/currency";
import daysReducer from "../features/days";
import selectCoinReducer from "../features/coinSelection"

export const store = configureStore({
  reducer: {
    cryptoPortfolio: coinReducer,
    defaultCurrency: currencyReducer,
    defaultDays: daysReducer,
    selectCoin:selectCoinReducer
  },
});
