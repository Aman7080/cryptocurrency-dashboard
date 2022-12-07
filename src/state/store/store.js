import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/exchangeCoin";

export const store = configureStore({
  reducer: {
    cryptoPortfolio: coinReducer ,
  },
});
