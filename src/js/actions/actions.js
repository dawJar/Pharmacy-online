import * as types from '../constants/ActionTypes';
import shop from '../api/shop';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setVisibilityFilter = (currentFilter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    currentFilter
  }
}

// FETCH DATA
const receiveDrugs = (drugs) => {
  return {
    type: types.RECEIVE_DRUGS,
    drugs
  }
};

export const getAllDrugs = () => (dispatch) => {
  shop.getDrugs(drugs => {
    dispatch(receiveDrugs(drugs))
  })
};

// const addToCartUnsafe = (drugId) => {
//   return {
//     type: types.ADD_TO_CART,
//     drugId
//   }
// };
//
// export const addToCart = drugId => (dispatch, getState) => {
//   // if (getState().drugs.byId[drugId].inventory > 0) {
//     dispatch(addToCartUnsafe(drugId))
//   // }
// }

// export const checkout = drugs => (dispatch, getState) => {
//   const { cart } = getState()
//
//   dispatch({
//     type: types.CHECKOUT_REQUEST
//   })
//   shop.buyDrugs(drugs, () => {
//     dispatch({
//       type: types.CHECKOUT_SUCCESS,
//       cart
//     })
//     // Replace the line above with line below to rollback on failure:
//     // dispatch({ type: types.CHECKOUT_FAILURE, cart })
//   })
// }
