import { combineReducers } from 'redux';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART_DRUG_QUANTITY,
  DECREASE_CART_DRUG_QUANTITY
} from '../constants/ActionTypes';


export const totalPrice = (state = 0, action) => {
  let { drugPrice, drugQuantity } = action;

  switch (action.type) {

    case ADD_TO_CART:
      let addTotalPrice = (parseFloat(state) + drugPrice).toFixed(2);
      return addTotalPrice;

    case REMOVE_FROM_CART:
      let removeTotalPrice = (parseFloat(state) - (drugPrice * drugQuantity)).toFixed(2);
      return removeTotalPrice;

    case INCREASE_CART_DRUG_QUANTITY:
      let incTotalPrice = (parseFloat(state) + drugPrice).toFixed(2);
      return incTotalPrice;

    case DECREASE_CART_DRUG_QUANTITY:
      let substractTotalPrice = (parseFloat(state) - drugPrice).toFixed(2);
      return substractTotalPrice;

    default:
      return state;
  }
}

export default combineReducers({
    totalPrice
});
