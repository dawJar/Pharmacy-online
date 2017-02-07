import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { setDrugsPerPage } from '../actions/actions';

class ButtonShowMore extends Component {

  constructor (props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick () {
    this.props.dispatch(setDrugsPerPage());
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

export default connect()(ButtonShowMore);
