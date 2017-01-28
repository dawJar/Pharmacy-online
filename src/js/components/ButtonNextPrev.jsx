import React, { PropTypes, Component } from 'react'

class ButtonNextPrev extends Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onClickBtn(this.props.direction);
  }

  render () {
    const { direction } = this.props;
    return (
      <div className="col-xs-1 " onClick={ this.handleClick }>
        <span className={ "glyphicon glyphicon-menu-" + direction }></span>
      </div>
    );
  }
}

export default ButtonNextPrev;
