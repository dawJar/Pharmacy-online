import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AppActions from '../actions/actions';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../sass/style.scss';

import Nav from '../components/Nav.jsx';

const AppContainer = ({children, actions}) => (
    <div>
        <Nav actions={actions}/> {children}
    </div>
);

AppContainer.propTypes = {
    actions: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(AppActions, dispatch)
})

export default connect(mapDispatchToProps)(AppContainer)
