import React, { PropTypes } from 'react';

import * as constants from '../constants/AppConstants';

import ButtonControlContainer from '../containers/ButtonControlContainer';


const ButtonGroup = ({ showAsShoppingCart, ...otherProps }) => {

    let btnProps = [
      { btnValue: 'Remove', control: constants.BTN_CONTROL.REMOVE },
      { btnValue: 'Details', control: constants.BTN_CONTROL.DETAILS },
      { btnValue: 'Add to cart', control: constants.BTN_CONTROL.ADD_TO_CART }
    ];

    return (
        <div className="btn-group" role="group">

            <ButtonControlContainer
                control={ (showAsShoppingCart) ?
                  btnProps[0].control : btnProps[1].control }
                { ...otherProps }
            >
                { (showAsShoppingCart) ? btnProps[0].btnValue : btnProps[1].btnValue }
            </ButtonControlContainer>

            { (showAsShoppingCart) ? null :
                 <ButtonControlContainer
                   { ...otherProps }
                   control={ constants.BTN_CONTROL.ADD_TO_CART } >
                    Add to cart
                 </ButtonControlContainer>
            }
        </div>
    );
}


export default ButtonGroup;
