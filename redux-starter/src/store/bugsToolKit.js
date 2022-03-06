import { createAction, createReducer } from '@reduxjs/toolkit';

// ACTION CREATORS
const addBug = createAction('ADD_BUG');
const removeBug = createAction('REMOVE_BUG');
const resolveBug = createAction('RESOLVE_BUG');

// REDUCERS
let lastId = 0;

createReducer([], {
  addBug: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    })
  },
  removeBug: (state, action) => {
    const index = state.findIndex(bug => bug.id === state[index].resolved = true)
  },
  resolveBug: () => {
    return state.map(bug => bug.id !== action.payload.id ? bug : {
      ...bug, resolved: true
    }
}
})