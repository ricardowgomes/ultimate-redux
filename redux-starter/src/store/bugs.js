// DUCKS PATTERN (ALL IN ONE FILE)

// ACTION TYPES
const ADD_BUG = 'ADD_BUG';
const REMOVE_BUG = 'REMOVE_BUG';
const RESOLVE_BUG = 'RESOLVE_BUG';

// ACTIONS CREATORS
export const addBug = (description) => ({
  type: ADD_BUG,
  payload: {
    description
  }
})

export const removeBug = (id) => ({
  type: REMOVE_BUG,
  payload: {
    id
  }
})

export const resolveBug = (id) => ({
  type: RESOLVE_BUG,
  payload: {
    id
  }
})

// REDUCERS
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ]

    case REMOVE_BUG:
      return state.filter(bug => bug.id !== action.payload.id)

    case RESOLVE_BUG:
      return state.map(bug => bug.id !== action.payload.id ? bug : {
        ...bug, resolved: true
      })

    default:
      return state;
  }
}