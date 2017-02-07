import { combineReducers } from 'redux';
import { SET_CURRENT_VISIBLE_DRUG } from '../constants/ActionTypes';

const initialState = {
  drugIndex: 0
}

export const setCurrentVisibleDrug = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_VISIBLE_DRUG:
      return {
        drugIndex: action.drugIndex
      }
    default:
      return state;
  }
}

export default combineReducers({
  setCurrentVisibleDrug
});
