import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/actions';
import { Link } from 'react-router';


class NavLink extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.onClickSetFilter(this.props.data.linkFilter);
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



export default NavLink;
