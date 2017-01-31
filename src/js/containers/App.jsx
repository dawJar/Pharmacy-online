import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../sass/style.scss';

import Nav from '../components/Nav.jsx';


class App extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        const { children, navigation, actions } = this.props;
        
        return (
            <div>
                <Nav navigation={ navigation } actions={ actions } />
                { children }
            </div>
        );
    }
}

App.propTypes = {
  navigation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  navigation: state.navigation
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(AppActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
