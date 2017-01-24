import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ToggleBtn from './ToggleBtn';

export default class NavToggle extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.actions.setIndex(0);
    }

    render() {
        return (
            <div className="navbar-header">
                <ToggleBtn />
                <Link to="/" className="navbar-brand hidden-sm" onClick={this.handleOnClick}>WebSiteName</Link>
            </div>
        );
    }
}

NavToggle.propTypes = {
    actions: PropTypes.object.isRequired
}
