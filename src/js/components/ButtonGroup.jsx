import React, {PropTypes, Component} from 'react';

import * as constants from '../constants/AppConstants';

import ButtonControlContainer from '../containers/ButtonControlContainer';


class ButtonGroup extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // let { drugId } = this.props;

        return (
            <div className="btn-group" role="group" aria-label="...">

                <ButtonControlContainer { ...this.props }
                    control={ constants.BTN_CONTROL.DETAILS } >
                    Details
                </ButtonControlContainer>

                <ButtonControlContainer { ...this.props }
                    control={ constants.BTN_CONTROL.ADD_TO_CART } >
                    Add to cart
                </ButtonControlContainer>

            </div>
        );
    }
}

export default ButtonGroup;
