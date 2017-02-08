import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/ActionTypes';

const initialState = {
  countItems: 0,
  totalPrice: 0,
};

export const setCartData = (state = initialState, action) => {
  let { countItems, totalPrice } = state

  switch (action.type) {

    case ADD_TO_CART:
      return {
        countItems: countItems + 1,
        totalPrice: totalPrice + action.drugPrice
      };

    case REMOVE_FROM_CART:
      return {
        countItems: countItems - 1,
        totalPrice: totalPrice - action.drugPrice
      };

    default:
      return state;
  }
}

export default combineReducers({
    setCartData
});
