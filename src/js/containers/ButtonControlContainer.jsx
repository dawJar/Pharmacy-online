import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as constants from '../constants/AppConstants';

import '../../sass/componentStyles/buttonControl.scss';

import { setLinkData } from '../reducers/visibilityReducer';
import {
    setDrugsPerPage,
    addToCart,
    removeFromCart,
    setVisibilityFilter,
    addIdToLatest
} from '../actions/actions';


class ButtonControlContainer extends Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let {
      control,
      dispatch,
      drugID,
      drugPrice,
      quantityById
    } = this.props;

    let newDrugID = drugID - 1;

    switch (control) {

      case constants.BTN_CONTROL.SHOW_MORE:
          dispatch(setDrugsPerPage());
          break;

      case constants.BTN_CONTROL.ADD_TO_CART:
          dispatch(addToCart(newDrugID, drugPrice));
          break;

      case constants.BTN_CONTROL.DETAILS:
          this.setQueryPath(newDrugID, dispatch);
          dispatch(addIdToLatest(newDrugID));
          break;

      case constants.BTN_CONTROL.REMOVE:
          let quantityOfDrugID = (quantityById !== undefined ) ?
              quantityById[newDrugID] : null;
          dispatch(removeFromCart(newDrugID, drugPrice, quantityOfDrugID));
          break;
    }
  }

  setQueryPath (drugID, dispatch) {
      let { linkPath, linkFilter } = setLinkData(drugID);

      browserHistory.push(linkPath);
      dispatch(setVisibilityFilter(linkFilter));
  }

  render () {
    let { children, whichPanelStyle, btnShowMore } = this.props;
    let btnShowMoreStyle = (btnShowMore !== undefined) ? ' show-more' : '';
    let newClassName = 'btn pull-right '
                        + whichPanelStyle
                        + btnShowMoreStyle;
    return (
      <button className={ newClassName }
              onClick={ this.handleClick }
      >
        { children }
      </button>
    )
  }
}

export default connect()(ButtonControlContainer);
