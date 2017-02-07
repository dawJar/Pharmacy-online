import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER, SET_CURRENT_VISIBLE_DRUG, SET_DRUGS_PER_PAGE } from '../constants/ActionTypes';

const initialState = {
  drugIndex: 0,
  drugsPerPage: 4,
}

export const setCurrentVisibleDrug = (state = initialState, action) => {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return initialState;

    case SET_CURRENT_VISIBLE_DRUG:
      return {
        ...state,
        drugIndex: action.drugIndex,
      };

    case SET_DRUGS_PER_PAGE:
      return {
        ...state,
        drugsPerPage: state.drugsPerPage + 4
      };
      
    default:
      return state;
  }
}

export default combineReducers({
  setCurrentVisibleDrug
});
