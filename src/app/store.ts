import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "../slices/issuesSlice";
import issueDetailReducer from "../slices/issueDetailSlice";

export const store = configureStore({
  reducer: {
    issues: issuesReducer,
    issueDetail: issueDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
