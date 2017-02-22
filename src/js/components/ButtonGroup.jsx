import React, { PropTypes } from 'react';
import * as constants from '../constants/AppConstants';

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

            {/* TODO: show as one component  */}
            { (!showAsShoppingCart) ?
                <div>
                    <ButtonControlContainer
                        control={ constants.BTN_CONTROL.ADD_TO_CART }
                        { ...otherProps }
                    >
                        Add to cart
                    </ButtonControlContainer>
                </div> : null
            }
            { (!showAsShoppingCart && !removeDetails) ?
                <div>
                    <ButtonControlContainer
                        control={ constants.BTN_CONTROL.DETAILS }
                        { ...otherProps }
                    >
                        Details
                    </ButtonControlContainer>
                </div> : null
            }
        </div>
    );
}


export default ButtonGroup;
