import React, { PropTypes, Component } from 'react';

export default class ButtonShowMore extends Component {

  constructor (props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick () {
    this.props.onClickShowMore();
  }

  render () {
    return (
      <button className="btn btn-warning"
        onClick={ this.handleOnClick }>
        show more...
      </button>
    )
  }

}
