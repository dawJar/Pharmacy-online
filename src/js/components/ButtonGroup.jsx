import React, { PropTypes } from 'react';
import * as constants from '../constants/AppConstants';

import '../../sass/componentStyles/buttonControl.scss';

import ButtonControlContainer from '../containers/ButtonControlContainer';


const ButtonGroup = ({
    showAsShoppingCart,
    removeDetails,
    ...otherProps
}) => {
    return (
        <div>
            { (showAsShoppingCart) ?
                <ButtonControlContainer
                    control={ constants.BTN_CONTROL.REMOVE }
                    { ...otherProps }
                >
                    Remove
                </ButtonControlContainer> : null
            }
            { (!showAsShoppingCart) ?
                <ButtonControlContainer
                    control={ constants.BTN_CONTROL.ADD_TO_CART }
                    { ...otherProps }
                >
                    Add to cart
                </ButtonControlContainer> : null
            }
            { (!showAsShoppingCart && !removeDetails) ?
                <ButtonControlContainer
                    control={ constants.BTN_CONTROL.DETAILS }
                    { ...otherProps }
                >
                    Details
                </ButtonControlContainer> : null
            }
        </div>
    );
}


export default ButtonGroup;
