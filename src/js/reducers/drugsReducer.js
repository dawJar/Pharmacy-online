import { combineReducers } from 'redux';
import { RECEIVE_DRUGS, ADD_TO_CART, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/ActionTypes';

// const { SHOW_ALL } = VisibilityFilters;


export const visibilityFilter = (state = 'on_sale', action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        let arrayFilter = setFilterToRecivedFilter(action.currentFilter)
        return arrayFilter;
      default:
        return state;
    }
}

export const fetchDrugs = (state = [], action) => {
    switch (action.type) {
      case RECEIVE_DRUGS:
        return action.drugs;
      default:
        return state;
    }
}

export default combineReducers({
    fetchDrugs,
    visibilityFilter
});

const setFilterToRecivedFilter = (currFilter) => {
    switch (currFilter) {
        case 'SHOW_HEALTH_BODY':
            return 'health&body';
        case 'SHOW_INFECTIONS':
            return 'infections';
        case 'SHOW_VITAMINS':
            return 'vitamins';
        case 'SHOW_SKINCARE':
            return 'skincare';
        case 'SHOW_PAINKILLERS':
            return 'painkillers';
        case 'SHOW_OTHER':
            return 'other';
        case 'SHOW_ON_SALE':
            return 'on_sale';
        default:
            return 'all'
    }
}
