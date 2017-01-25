import { combineReducers } from 'redux';
import navigation from './navigationReducer';
import drugs, * as fromDrugsReducer from './drugsReducer';
import cart, * as dromCartReducer from './cartReducer';


export default combineReducers({
  navigation,
  drugs,
  cart
});

// export default rootReducer;

const getAddedIds = state => fromCartReducer.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCartReducer.getQuantity(state.cart, id)
const getDrug = (state, id) => fromDrugsReducer.getDrug(state.drugs, id)

// export const getTotal = state => getAddedIds(state) => getDrug(state, id).price

  // getAddedIds(state)
  //   .reduce((total, id) =>
  //     total + getDrug(state, id).price * getQuantity(state, id),
  //     0
  //   )
  //   .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getDrug(state, id),
    quantity: getQuantity(state, id)
  }))
