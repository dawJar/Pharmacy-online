import { SET_INDEX } from '../actions/actions.js';

const index = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INDEX':
      return {
        index: action.index
      };
    default:
      return state;
  }
};

export default index;
