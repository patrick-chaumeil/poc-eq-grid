import {
  createReducer,
  createAction,
  nanoid,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import data from './data'

export const selectItem = createAction('SELECT_ITEM')
export const addItem = createAction('ADD_ITEM')
export const removeItem = createAction('REMOVE_ITEM')
export const setItemLayout = createAction('SET_ITEM_LAYOUT')
export const toggleDisplayOption = createAction('TOGGLE_DISPLAYOPTION')

export const loadForm = createAsyncThunk('loadForm', async (_, thunkAPI) => {
  console.log('loading')
  try {
    const form = JSON.parse(localStorage.getItem('form'))
    console.log('loaded')
    return form
  } catch (err) {
    alert('load failed')
    console.error(err)
  }
})

export const saveForm = createAsyncThunk('saveForm', async (_, thunkAPI) => {
  const { form } = thunkAPI.getState()
  console.log('saving')
  try {
    localStorage.setItem('form', JSON.stringify(form))
    console.log('saved')
  } catch (err) {
    alert('save failed')
    console.error(err)
  }
})

const initialState = {
  selectedId: undefined,
  form: data,
  displayOptions: {
    showContent: true,
    showName: false,
  },
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
  [toggleDisplayOption]: (state, action) => {
    const { optionName } = action.payload
    state.displayOptions[optionName] = !state.displayOptions[optionName]
  },
  [loadForm.fulfilled]: (state, action) => {
    state.form = action.payload
  },
})

export default rootReducer
