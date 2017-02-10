import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { setDrugsPerPage, addToCart, removeFromCart } from '../actions/actions';

import * as constants from '../constants/AppConstants';

class ButtonControlContainer extends Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let { control, dispatch, drugId, drugPrice } = this.props;

    switch (control) {

      case constants.BTN_CONTROL.SHOW_MORE:
        dispatch(setDrugsPerPage());
        break;

      case constants.BTN_CONTROL.ADD_TO_CART:
        dispatch(addToCart(drugId - 1, drugPrice));
        break;

      case constants.BTN_CONTROL.DETAILS:
        console.log(drugId - 1);
        break;

      case constants.BTN_CONTROL.REMOVE:
        dispatch(removeFromCart(drugId - 1, drugPrice));
        break;
    }
  }

  render () {
    const { children } = this.props;

    return (
      <button className="btn btn-info"
              onClick={ this.handleClick }>
        { children }
      </button>
    )
  }

}

export default connect()(ButtonControlContainer);