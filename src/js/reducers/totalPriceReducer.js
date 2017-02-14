import { combineReducers } from 'redux';
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_CART_DRUG_QUANTITY,
    DECREASE_CART_DRUG_QUANTITY
} from '../constants/ActionTypes';


export const totalPrice = (state = 0, action) => {
    let { drugPrice, drugQuantity } = action;

    let currentState = parseFloat(state);
    let addTotalPrice = (currentState + drugPrice).toFixed(2);

    switch (action.type) {

      case ADD_TO_CART:
          return addTotalPrice;

      case REMOVE_FROM_CART:
          let removeTotalPrice = (currentState - (drugPrice * drugQuantity)).toFixed(2);
          return removeTotalPrice;

      case INCREASE_CART_DRUG_QUANTITY:
          return addTotalPrice;

      case DECREASE_CART_DRUG_QUANTITY:
          let substractTotalPrice = (currentState - drugPrice).toFixed(2);
          return substractTotalPrice;

      default:
          return state;
    }
}

export default combineReducers({
    totalPrice
});
