import { combineReducers } from 'redux';
import { visibilityFilter, fetchDrugs } from './drugsReducer';
// import cart, * as dromCartReducer from './cartReducer';


export default combineReducers({
  visibilityFilter,
  fetchDrugs
  // cart
});


// export default rootReducer;

// const getAddedIds = state => fromCartReducer.getAddedIds(state.cart)
// const getQuantity = (state, id) => fromCartReducer.getQuantity(state.cart, id)
// const getDrug = (state, id) => fromDrugsReducer.getDrug(state.drugs, id)
//
// // export const getTotal = state => getAddedIds(state) => getDrug(state, id).price
//
// // getAddedIds(state).reduce((total, id) =>
// //     total + getDrug(state, id).price
//
// export const getCartDrugs = state =>
//   getAddedIds(state).map(id => ({
//     ...getDrug(state, id),
//     quantity: getQuantity(state, id)
//   }))
