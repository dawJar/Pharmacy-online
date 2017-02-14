import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Typeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';

import { setVisibilityFilter, addIdToLatest } from '../actions/actions';


class ItemContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleClickItem () {
        let { productID, dispatch } = this.props;
        this.setQueryPath(productID, dispatch);
        this.addToLatestResults(productID, dispatch);
    }

    setQueryPath (productID, dispatch) {
        let newLinkData = this.setLinkData(productID);
        let { linkPath, linkFilter } = newLinkData;

        browserHistory.push(linkPath);

        dispatch(setVisibilityFilter(linkFilter));
    }

    addToLatestResults (productID, dispatch) {
        dispatch(addIdToLatest(productID));
    }

    setLinkData (queryId) {
        return {
            linkPath: {
                pathname: '/search',
                query: { id: queryId }
            },
            linkFilter: "SHOW_ALL"
        }
    }

    render () {
      let { children, productID } = this.props;

      return (
        <p onClick={ this.handleClickItem } >
            { children }
        </p>
      );
    }
}

export default connect()(ItemContainer);
