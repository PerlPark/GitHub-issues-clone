import { createSlice } from "@reduxjs/toolkit";
import type { Issue } from "../types/issues";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IssuesState {
  data: Issue[];
  page: number;
}

const initialState: IssuesState = {
  data: [],
  page: 0,
};

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Issue[]>) => {
      state.data = [...state.data, ...action.payload];
    },
    clearData: (state) => {
      state.data = [];
      state.page = 0;
    },
    nextPage: (state) => {
      state.page += 1;
    },
  },
});

export const { setData, clearData, nextPage } = issuesSlice.actions;

export default issuesSlice.reducer;
