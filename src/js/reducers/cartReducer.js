import { combineReducers } from 'redux';
import { ADD_TO_CART } from '../constants/ActionTypes';

const initialState = {
  addedIds: [],
  quantityById: {}
};

export const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { drugId } = action;
      if (state.indexOf(drugId) !== -1) {
        return state;
      }
      return [...state, drugId];
    default:
      return state;
  }
}

export const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { drugId } = action;
      return {
        [drugId]: (state.drugId || 0) + 1
      }
    default:
      return state;
  }
}

export default combineReducers({
    addedIds,
    quantityById
});
