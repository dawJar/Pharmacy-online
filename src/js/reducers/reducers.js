import {combineReducers} from 'redux';

import drugsReducer, * as fromDrugsReducer from './drugsReducer';
import drugListReducer from './drugListReducer';
import cartReducer from './cartReducer';
import cartDataReducer from './cartDataReducer';
import latestResultsReducer from './latestResultsReducer';
import visibilityReducer from './visibilityReducer';

export default combineReducers({
      visibilityReducer,
      drugsReducer,
      drugListReducer,
      cartReducer,
      cartDataReducer,
      latestResultsReducer
});

// GET FILTERED ARRAY OF DRUG OBJECTS
export const getVisibleDrugs = (drugs, toFilter, addedDrugIds) => {
    if (toFilter === 'on_sale') {
        return drugs.filter(drug => drug.onSale === true)
    } else if (toFilter === 'show_all') {
        return drugs;
    } else if (toFilter === 'shopping_cart') {
        return shoppingCartDrugs(drugs, addedDrugIds);
    } else {
        return drugs.filter(drug => drug.drugCategory === toFilter)
    }
}

const shoppingCartDrugs = (drugs, addedIds) => {
    let addedToCart = [];
    addedIds.forEach((drugId) => {
        addedToCart.push(drugs[drugId]);
    })
    return addedToCart;
}
