import React, { PropTypes, Component } from 'react';

import '../../../sass/componentStyles/buttonControl.scss';


class ButtonNextPrev extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let { onClickPrevNext, filterIsShoppingCart, direction, plusMinus } = this.props;
        if (filterIsShoppingCart) {
            return onClickPrevNext(plusMinus, filterIsShoppingCart);
        }
        onClickPrevNext(direction);
    }

    render () {
        let {
            direction,
            filterIsShoppingCart,
            plusMinus,
            setClassName
        } = this.props;

        let createGlyphiconStyle = (filterIsShoppingCart) ?
              plusMinus + '-sign' : 'menu-' + direction;

        return (
            <div className={ setClassName } onClick={ this.handleClick }>
                <span className={ "glyphicon glyphicon-" +  createGlyphiconStyle }></span>
            </div>
        );
    }
}

ButtonNextPrev.PropTypes = {
    direction: PropTypes.string.isRequired,
    filterIsShoppingCart: PropTypes.bool.isRequired,
    plusMinus: PropTypes.string.isRequired,
    setClassName: PropTypes.string.isRequired,
    onClickPrevNext: PropTypes.func.isRequired
};

export default ButtonNextPrev;
