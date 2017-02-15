import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes';

export const visibilityFilter = (state = 'on_sale', action) => {
    switch (action.type) {

      case SET_VISIBILITY_FILTER:
        let arrayFilter = setFilterToRecivedFilter(action.currentFilter)
        return arrayFilter;

      default:
        return state;
    }
}

export default combineReducers({
    visibilityFilter
});

export const setLinkData = (queryId) => {
    return {
        linkPath: {
            pathname: '/search',
            query: { id: queryId }
        },
        linkFilter: "SHOW_ALL"
    }
}

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
        case 'SHOW_SHOPPING_CART':
            return 'shopping_cart';
        case 'SHOW_ALL':
            return 'show_all'
        default:
            return 'show_all'
    }
}
