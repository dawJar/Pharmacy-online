import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../sass/style.scss';

import Nav from '../components/Nav.jsx';

const AppContainer = ({ children, ...otherProps }) => {

    let childrenToShow = React.cloneElement(children, { ...otherProps });

    return (
      <div>
          <Nav { ...otherProps }/>
          { childrenToShow }
      </div>
    );
}

AppContainer.propTypes = {
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    let { drugsReducer, cartDataReducer } = state;
    let { countItems, totalPrice } = cartDataReducer.setCartData;

    return {
      currentFilter: drugsReducer.visibilityFilter,
      countItems,
      totalPrice
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(AppActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer)
