import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./reducer";

const selectDomain = state => state || initialState;

export const selectForm = createSelector(
  [selectDomain],
  ({ form }) => form
);
