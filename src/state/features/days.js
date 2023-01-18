import { createSlice } from "@reduxjs/toolkit";

let initialState = [1];

const daysSlice = createSlice({
  name: "defaultDays",
  initialState,
  reducers: {
    updateDays: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { updateDays } = daysSlice.actions;
export default daysSlice.reducer;
