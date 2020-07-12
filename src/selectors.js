import { createSelector } from '@reduxjs/toolkit'
import { initialState } from './reducer'

const selectDomain = state => state || initialState

export const selectForm = createSelector(
  [selectDomain],
  ({ form }) => form,
)

function findByIdRec(arr, id) {
  if (!arr) {
    return
  }
  const idx = arr.findIndex(o => o.id === id)
  if (idx > -1) {
    return arr[idx]
  } else {
    return arr.map(o => findByIdRec(o.items, id)).find(o => !!o)
  }
}
export const selectSelectedItem = createSelector(
  [selectDomain],
  ({ selectedId, form }) => {
    const item = findByIdRec(form, selectedId)
    return item
  },
)

export const selectDisplayOptions = createSelector(
  [selectDomain],
  domain => domain.displayOptions,
)
