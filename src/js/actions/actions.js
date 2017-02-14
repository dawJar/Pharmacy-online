import * as types from '../constants/ActionTypes';
import shop from '../api/shop';

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

// set visiblility to filter fetched data
export const setVisibilityFilter = (currentFilter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    currentFilter
  }
}

// set current visible drug for "carousel"
export const setCurrentVisibleDrug = (drugIndex) => {
  return {
    type: types.SET_CURRENT_VISIBLE_DRUG,
    drugIndex
  }
}

// add / remove from shopping-cart
export const addToCart = (drugId, drugPrice, drugQuantity) => {
  return {
    type: types.ADD_TO_CART,
    drugId,
    drugPrice,
    drugQuantity
  }
}

export const removeFromCart = (drugId, drugPrice, drugQuantity) => {
  return {
    type: types.REMOVE_FROM_CART,
    drugId,
    drugPrice,
    drugQuantity
  }
}

// increace / decreace quantity of drug in shopping-cart
export const inreaseQuantityOfDrug = (drugId, drugPrice) => {
  return {
    type: types.INCREASE_CART_DRUG_QUANTITY,
    drugId,
    drugPrice
  }
}

export const decreaseQuantityOfDrug = (drugId, drugPrice) => {
  return {
    type: types.DECREASE_CART_DRUG_QUANTITY,
    drugId,
    drugPrice
  }
}

// export const inreaseQuantityOfDrug = (drugId, drugQuantity) => {
//   return {
//     type: types.INCREASE_CART_DRUG_QUANTITY,
//     drugId,
//     drugQuantity
//   }
// }

// export const decreaseQuantityOfDrug = (drugId, drugQuantity) => {
//   return {
//     type: types.DECREASE_CART_DRUG_QUANTITY,
//     drugId,
//     drugQuantity
//   }
// }

// increase quantity of visible drugs in categories
export const setDrugsPerPage = () => {
  return {
    type: types.SET_DRUGS_PER_PAGE
  }
}

// set inspected product for latest results
export const addIdToLatest = (addIdToLatest) => {
  return {
    type: types.ADD_ID_TO_LATEST,
    addIdToLatest
  }
}

// fetch data
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
