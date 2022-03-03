import * as actions from './actionTypes'

export default function addBug(description) {
  return {
    type: actions.ADD_BUG,
    payload: {
      description
    }
  }
}

export default function removeBug(id) {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id
    }
  }
}

export const resolveBug = (id) => ({
  type: actions.RESOLVE_BUG,
  payload: {
    id
  }
})