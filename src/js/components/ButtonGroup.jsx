import React, {PropTypes, Component} from 'react';

import * as constants from '../constants/AppConstants';

import ButtonControlContainer from '../containers/ButtonControlContainer';


class ButtonGroup extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { showAsShoppingCart } = this.props;
        let btnProps = [
          { btnValue: 'Remove', control: constants.BTN_CONTROL.REMOVE },
          { btnValue: 'Details', control: constants.BTN_CONTROL.DETAILS },
          { btnValue: 'Add to cart', control: constants.BTN_CONTROL.ADD_TO_CART }
        ];

        return (
            <div className="btn-group" role="group">

                <ButtonControlContainer { ...this.props }
                    control={ (showAsShoppingCart) ? btnProps[0].control : btnProps[1].control } >
                    { (showAsShoppingCart) ? btnProps[0].btnValue : btnProps[1].btnValue }
                </ButtonControlContainer>

                { (showAsShoppingCart) ? null :
                     <ButtonControlContainer { ...this.props }
                        control={ constants.BTN_CONTROL.ADD_TO_CART } >
                        Add to cart
                     </ButtonControlContainer>
                }
            </div>
        );
    }
}

export default ButtonGroup;
