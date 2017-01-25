import { SET_NAV_INDEX } from '../constants/ActionTypes';


const navigation = (state = { navIndex: 0 }, action) => {

  switch (action.type) {

    case SET_NAV_INDEX:
      return state = { navIndex: action.navIndex };

    default:
      return state;
  }

};


export default navigation;
