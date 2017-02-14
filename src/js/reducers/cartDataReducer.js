import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/ActionTypes';

const initialState = {
  countItems: 0,
  totalPrice: 0,
};

export const setCartData = (state = initialState, action) => {
  let { drugPrice, drugQuantity } = action;

// TODO: replace with temporary var
  // let changePrice = drugPrice * drugQuantity;
  let changePrice = drugPrice;

  switch (action.type) {

    case ADD_TO_CART:
      return {
        countItems: state.countItems + 1,
        totalPrice: state.totalPrice + changePrice
      };

    case REMOVE_FROM_CART:
      return {
        countItems: state.countItems - 1,
        totalPrice: state.totalPrice - changePrice
      };

    default:
      return state;
  }
}

export default combineReducers({
    setCartData
});
