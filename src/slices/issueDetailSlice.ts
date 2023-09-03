import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface issueDetailState {
  number: number;
}

const initialState: issueDetailState = {
  number: 0,
};

export const issueDetailSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setNumber: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    },
  },
});

export const { setNumber } = issueDetailSlice.actions;

export default issueDetailSlice.reducer;
