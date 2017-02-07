import { combineReducers } from 'redux';
import drugsReducer, * as fromDrugsReducer from './drugsReducer';
import drugListReducer from './drugListReducer';


export default combineReducers({
  drugsReducer,
  drugListReducer
});

export const getVisibleDrugs = (drugs, toFilter) => (toFilter === 'on_sale') ? drugs.filter(drug => drug.onSale === true) : drugs.filter(drug => drug.drugCategory === toFilter)
