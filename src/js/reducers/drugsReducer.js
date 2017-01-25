import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes';

const drugs = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state
        // inventory: state.inventory - 1
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.drugs
        // ...action.drugs.reduce((obj, drug) => {
        //   obj[drug.id] = drug
        //   return obj
        // }, {})
      }
    default:
      const { drugId } = action
      if (drugId) {
        return {
          ...state,
          [drugId]: drugs(state[drug], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      // return action.drugs.map(drug => drug.id)
      return action.drugs
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getDrug = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getDrug(state, id))
