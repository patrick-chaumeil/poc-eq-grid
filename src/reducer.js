import { createReducer, createAction, nanoid } from "@reduxjs/toolkit";
import data from "./data";

export const selectItem = createAction("SELECT_ITEM");
export const addItem = createAction("ADD_ITEM");
export const removeItem = createAction("REMVOVE_ITEM");

function addNextToItemById(arr, id, item) {
  if (!arr) {
    return;
  }
  const idx = arr.findIndex(o => o.id === id);
  if (idx > -1) {
    arr.splice(idx + 1, 0, item);
  } else {
    arr.forEach(o => addNextToItemById(o.items, id, item));
  }
}
const initialState = {
  selectedId: undefined,
  form: data
};

const rootReducer = createReducer(initialState, {
  [selectItem]: (state, action) => {
    state.selectedId = action.payload;
  },
  [addItem]: (state, action) => {
    const component = action.payload;
    const item = {
      id: nanoid(),
      component,
      className: "eq-col-2"
    };
    if (state.selectedId) {
      addNextToItemById(state.form, state.selectedId, item);
    } else {
      state.form.push(item);
    }
  }
});

export default rootReducer;
