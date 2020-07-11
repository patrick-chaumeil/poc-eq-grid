import { createReducer, createAction, nanoid } from '@reduxjs/toolkit'
import data from './data'

export const selectItem = createAction('SELECT_ITEM')
export const addItem = createAction('ADD_ITEM')
export const removeItem = createAction('REMOVE_ITEM')
export const setItemLayout = createAction('SET_ITEM_LAYOUT')

const initialState = {
  selectedId: undefined,
  form: data,
}

function insertIntoItemByIdRec(arr, id, item) {
  if (!arr) {
    return
  }
  const idx = arr.findIndex(o => o.id === id)
  if (idx > -1) {
    if (arr[idx].items) {
      arr[idx].items.push(item)
    } else {
      arr[idx].items = [item]
    }
  } else {
    arr.forEach(o => insertIntoItemByIdRec(o.items, id, item))
  }
}

function addNextToItemByIdRec(arr, id, item) {
  if (!arr) {
    return
  }
  const idx = arr.findIndex(o => o.id === id)
  if (idx > -1) {
    arr.splice(idx + 1, 0, item)
  } else {
    arr.forEach(o => addNextToItemByIdRec(o.items, id, item))
  }
}

function removeItemByIdRec(arr, id) {
  if (!arr) {
    return
  }
  const idx = arr.findIndex(o => o.id === id)
  if (idx > -1) {
    arr.splice(idx, 1)
  } else {
    arr.forEach(o => removeItemByIdRec(o.items, id))
  }
}

function setLayoutRec(arr, id, layout) {
  if (!arr) {
    return
  }
  const idx = arr.findIndex(o => o.id === id)
  if (idx > -1) {
    arr[idx].layout = layout
  } else {
    arr.forEach(o => setLayoutRec(o.items, id, layout))
  }
}

const rootReducer = createReducer(initialState, {
  [selectItem]: (state, action) => {
    state.selectedId = action.payload
  },
  [addItem]: (state, action) => {
    const { component, options, shouldInsert } = action.payload
    const item = {
      id: nanoid(),
      component,
      layout: { eqCol: 'max' },
      options,
    }
    if (state.selectedId) {
      if (shouldInsert) {
        // ajout à l’intérieur du composant sélectionné (qui devrait être de type container)
        insertIntoItemByIdRec(state.form, state.selectedId, item)
      } else {
        // ajout à la suite du composant sélectionné
        addNextToItemByIdRec(state.form, state.selectedId, item)
      }
    } else {
      state.form.push(item)
    }
    // enfin sélectionne l’item ajouté
    state.selectedId = item.id
  },
  [removeItem]: (state, action) => {
    if (state.selectedId) {
      removeItemByIdRec(state.form, state.selectedId)
    }
  },
  [setItemLayout]: (state, action) => {
    const layout = action.payload
    setLayoutRec(state.form, state.selectedId, layout)
  },
})

export default rootReducer
