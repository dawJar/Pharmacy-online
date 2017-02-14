import { combineReducers } from 'redux';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART_DRUG_QUANTITY,
  DECREASE_CART_DRUG_QUANTITY
} from '../constants/ActionTypes';


const initialState = {
  addedIds: [],
  quantityById: {}
};

export const addedIds = (state = initialState.addedIds, action) => {
  const { drugId } = action;

  switch (action.type) {

    case ADD_TO_CART:
      if (state.indexOf(drugId) !== -1) {
        return state;
      }
      return [ ...state, drugId ];

    case REMOVE_FROM_CART:
      let arrayIndex =  state.indexOf(drugId);
      state.splice(arrayIndex, 1);
      return [ ...state ];

    default:
      return state;
  }
}

export const quantityById = (state = initialState.quantityById, action) => {
  let { drugId, drugQuantity } = action;

  switch (action.type) {

    case ADD_TO_CART:
      return {
        ...state,
        [drugId]: (state[drugId] || 0) + (drugQuantity || 1),
      }

// TODO: not checked yet
    case REMOVE_FROM_CART:
      delete state[drugId];
      return {
        ...state
      }

    case INCREASE_CART_DRUG_QUANTITY:
      return {
        ...state,
        [drugId]: (state[drugId]) + 1
      }

    case DECREASE_CART_DRUG_QUANTITY:
      if (state.hasOwnProperty(drugId) && state[drugId] > 1) {
        return {
          ...state,
          [drugId]: state[drugId] - 1
        }
      }
      return state;

    default:
      return state;
  }
}

export default combineReducers({
    addedIds,
    quantityById
});
