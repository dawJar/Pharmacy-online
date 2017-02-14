import React, { PropTypes, Component } from 'react';

class ButtonNextPrev extends Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onClickPrevNext(this.props.direction);
  }

  render () {
    let { direction, filterIsShoppingCart, plusMinus } = this.props;

    let createGlyphiconStyle = (filterIsShoppingCart) ?
          plusMinus : 'menu-' + direction;

    return (
      <div className="col-xs-1" onClick={ this.handleClick }>
        <span className={ "glyphicon glyphicon-" +  createGlyphiconStyle }></span>
      </div>
    );
  }
}

export default ButtonNextPrev;
