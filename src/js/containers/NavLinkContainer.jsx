import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setVisibilityFilter, addIdToLatest } from '../actions/actions';


class NavLinkContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let { data, dispatch, addId } = this.props;
        let { linkFilter } = data;
        dispatch(setVisibilityFilter(data.linkFilter));
        (addId) ? dispatch(addIdToLatest(addId)) : null;
    }

    render () {
        let { children, linkActiveStyle, data } = this.props;
        let { linkPath, linkName } = data;

        return (
            <li>
                <Link to={ linkPath } activeStyle={ linkActiveStyle } onClick={ this.handleClick }>
                    { children || linkName }
                </Link>
            </li>
        );
    }
}

NavLinkContainer.PropTypes = {
    children: PropTypes.object.isRequired,
    linkActiveStyle: PropTypes.string.isRequired,
    data: PropTypes.objectOf(PropTypes.shape({
        linkPath: PropTypes.string.isRequired,
        linkName: PropTypes.string.isRequired
    }))
};

export default connect()(NavLinkContainer);
