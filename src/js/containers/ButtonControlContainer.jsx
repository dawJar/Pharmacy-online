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
    let {
      control,
      dispatch,
      drugID,
      drugPrice,
      quantityById
    } = this.props;

    let quantityOfDrugID = (quantityById !== undefined ) ?
            quantityById[drugID - 1] : null;

    switch (control) {

      case constants.BTN_CONTROL.SHOW_MORE:
        dispatch(setDrugsPerPage());
        break;

      case constants.BTN_CONTROL.ADD_TO_CART:
        dispatch(addToCart(drugID - 1, drugPrice));
        break;

      case constants.BTN_CONTROL.DETAILS:
        console.log(drugID - 1);
        break;

      case constants.BTN_CONTROL.REMOVE:
        dispatch(removeFromCart(drugID - 1, drugPrice, quantityOfDrugID));
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

// const mapStateToProps = state => {
//   let { cartReducer: { quantityById } } = state;
//
//   return {
//       quantityById
//   }
// }

export default connect(
  // mapStateToProps
)(ButtonControlContainer);
