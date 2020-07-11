import { createReducer, createAction, nanoid } from "@reduxjs/toolkit";
import data from "./data";

export const addItem = createAction("ADD_ITEM");

const initialState = {
  form: data
};

const rootReducer = createReducer(initialState, {
  [addItem]: (state, action) => {
    const item = {
      id: nanoid(),
      component: action.payload,
      className: "eq-col"
    };
    state.form.push(item);
  }
});

export default rootReducer;
