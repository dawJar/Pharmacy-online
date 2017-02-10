import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/actions';

class NavLinkContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let { data, dispatch } = this.props;
        let { linkFilter } = data;
        dispatch(setVisibilityFilter(data.linkFilter));
    }

    render () {
        const { children, linkActiveStyle, data } = this.props;
        const { linkPath, linkName } = data;
        
        return (
            <li>
                <Link to={ linkPath } activeStyle={ linkActiveStyle } onClick={ this.handleClick }>
                    {children || linkName}
                </Link>
            </li>
        );
    }
}

export default connect()(NavLinkContainer);
