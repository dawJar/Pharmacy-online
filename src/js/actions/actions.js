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

export const setCurrentVisibleDrug = (drugIndex) => {
  return {
    type: types.SET_CURRENT_VISIBLE_DRUG,
    drugIndex
  }
}

export const addToCart = (drugId) => {
  return {
    type: types.ADD_TO_CART,
    drugId
  }
}

export const setDrugsPerPage = () => {
  return {
    type: types.SET_DRUGS_PER_PAGE
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
