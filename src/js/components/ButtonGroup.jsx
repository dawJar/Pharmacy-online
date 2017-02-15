import React, { PropTypes } from 'react';

import * as constants from '../constants/AppConstants';

import ButtonControlContainer from '../containers/ButtonControlContainer';


const ButtonGroup = ({ showAsShoppingCart, ...otherProps }) => {

    // let btnProps = [
    //   { btnValue: 'Remove', control: constants.BTN_CONTROL.REMOVE },
    //   { btnValue: 'Details', control: constants.BTN_CONTROL.DETAILS },
    //   { btnValue: 'Add to cart', control: constants.BTN_CONTROL.ADD_TO_CART }
    // ];

    return (
      <div className="btn-group" role="group">

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
                <ButtonControlContainer
                    control={ constants.BTN_CONTROL.DETAILS }
                    { ...otherProps }
                >
                    Details
                </ButtonControlContainer> : null
          }

          { (!showAsShoppingCart) ?
                <ButtonControlContainer
                    control={ constants.BTN_CONTROL.ADD_TO_CART }
                    { ...otherProps }
                >
                    Add to cart
                </ButtonControlContainer>
                : null
          }

      </div>
    );
}


export default ButtonGroup;
