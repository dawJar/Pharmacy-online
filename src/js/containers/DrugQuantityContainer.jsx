import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as constants from '../constants/AppConstants';

import '../../sass/componentStyles/drugQuantity.scss';

import { inreaseQuantityOfDrug, decreaseQuantityOfDrug } from '../actions/actions';

import ButtonNextPrev from '../components/Buttons/ButtonNextPrev';


class DrugQuantityContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClickNextPrev = this.handleClickNextPrev.bind(this);
    }

    handleClickNextPrev (value, shoppingCart) {
        let { dispatch, drugID, drugPrice, quantityById } = this.props;

        this.incOrDecreaseValueInShoppingCart(value,
            dispatch,
            drugID - 1,
            drugPrice,
            quantityById
        );
    }

    incOrDecreaseValueInShoppingCart (
        incOrDec,
        dispatch,
        drugID,
        drugPrice,
        quantityById
    ) {

        // check decremetaion
        // cant be less than one
        if (incOrDec === constants.MINUS && quantityById[drugID] > 1) {
            dispatch(decreaseQuantityOfDrug(drugID, drugPrice));
        } else if (incOrDec === constants.PLUS) {
            dispatch(inreaseQuantityOfDrug(drugID, drugPrice));
        }
    }

    render () {
        let {
            drugID,
            drugPrice,
            quantityById,
            filterIsShoppingCart,
            ...otherProps
        } = this.props;

        let quantityOfDrugID = quantityById[drugID - 1];

        return (
            <div className="row pull-right drug-quantity-container">
                <ButtonNextPrev
                    setClassName="col-xs-4 quantity-decrement"
                    onClickPrevNext={ this.handleClickNextPrev }
                    filterIsShoppingCart
                    direction={ constants.LEFT }
                    plusMinus={ constants.MINUS }
                    { ...otherProps }
                />

                <div className="col-xs-4 quantity-of-drug">
                    { quantityOfDrugID }
                </div>

                <ButtonNextPrev
                    setClassName="col-xs-4 quantity-increment"
                    onClickPrevNext={ this.handleClickNextPrev }
                    filterIsShoppingCart
                    direction={ constants.RIGTH }
                    plusMinus={ constants.PLUS }
                    { ...otherProps }
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { cartReducer: { quantityById } } = state;
    return {
        quantityById
    }
}

DrugQuantityContainer.PropTypes = {
    drugID: PropTypes.number.isRequired,
    drugPrice: PropTypes.number.isRequired,
    quantityById: PropTypes.number.isRequired,
    filterIsShoppingCart: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps
)(DrugQuantityContainer);
