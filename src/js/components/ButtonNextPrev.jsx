import React, { PropTypes, Component } from 'react';

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
    let { direction, filterIsShoppingCart, plusMinus, setClassName } = this.props;

    let createGlyphiconStyle = (filterIsShoppingCart) ?
          plusMinus : 'menu-' + direction;

    return (
        <div className={ setClassName } onClick={ this.handleClick }>
            <span className={ "glyphicon glyphicon-" +  createGlyphiconStyle }></span>
        </div>
    );
  }
}

export default ButtonNextPrev;
