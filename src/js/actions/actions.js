import * as types from '../constants/ActionTypes';

export const setIndex = (navIndex) => {
  return {
    type: types.SET_NAV_INDEX,
    navIndex
  };
};

window.setIndex = setIndex;
