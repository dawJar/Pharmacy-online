export const SET_INDEX = 'set_index';
export const ADD_DRUG = 'add_drug';

// let currentIndex = 0;

export const setIndex = (index) => {
  return {
    type: SET_INDEX,
    // id: currentIndex,
    index
  };
};
