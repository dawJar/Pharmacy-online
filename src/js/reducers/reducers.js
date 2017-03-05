import {combineReducers} from 'redux';

import drugsReducer from './drugsReducer';
import drugListReducer from './drugListReducer';
import cartReducer from './cartReducer';
import totalPriceReducer from './totalPriceReducer';
import searchReducer from './searchReducer';
import visibilityReducer from './visibilityReducer';

export default combineReducers({
      visibilityReducer,
      drugsReducer,
      drugListReducer,
      cartReducer,
      totalPriceReducer,
      searchReducer
});


const shoppingCartDrugs = (drugs, addedIds) => {
  let addedToCart = [];
  addedIds.forEach((drugId) => {
    addedToCart.push(drugs[drugId]);
  })
  return addedToCart;
}

// get filtered array of fetched drugs
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
