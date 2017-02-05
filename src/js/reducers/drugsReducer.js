import { combineReducers } from 'redux';
import { RECEIVE_DRUGS, ADD_TO_CART, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/ActionTypes';

const { SHOW_ALL } = VisibilityFilters;


export const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.currentFilter;
      default:
        return state;
    }
}

export const visibleDrugs = (state = [], action) => {
    switch (action.type) {
      case RECEIVE_DRUGS:
        return action.drugs;
      default:
        return state;
    }
}

export default combineReducers({
    visibleDrugs,
    visibilityFilter
});

export const getVisibleDrugs = state => state.visibleDrugs;
export const getVisibleFilter = state => state.visibilityFilter;
