import { combineReducers } from 'redux';
import { ADD_ID_TO_LATEST } from '../constants/ActionTypes';


export const latestResults = (state = [], action) => {
    let { addIdToLatest } = action;

    switch (action.type) {

        case ADD_ID_TO_LATEST:
            state.forEach((drugId) => {
                if (drugId === addIdToLatest) {
                    let index = state.indexOf(drugId);
                    state.splice(index, 1);
                    return [...state, addIdToLatest];
                }
            });

            if (state.length > 3) {
                state.shift();
            }

            return [...state, addIdToLatest]

        default:
            return state;
    }

}

export default combineReducers({
    latestResults
});
