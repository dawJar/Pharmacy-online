import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../actions/actions'
import { getVisibleDrugs } from '../../reducers/drugsReducer'

class Sale extends Component {

  constructor(props) {
    super(props);
    console.log('props:' + this.props);
  }

  render () {
    return (
    <h1>Sale</h1>
    );
  }
}

const mapStateToProps = state => ({
  drugs: getVisibleDrugs(state.drugs)
})

export default connect(
  mapStateToProps,
  // { addToCart }
)(Sale)
