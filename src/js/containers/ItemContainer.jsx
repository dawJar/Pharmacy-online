import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { setLinkData } from '../reducers/visibilityReducer';
import { setVisibilityFilter, addIdToLatest } from '../actions/actions';


class ItemContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleClickItem () {
        let { productID, dispatch } = this.props;

        this.setQueryPath(productID, dispatch);
        dispatch(addIdToLatest(productID));
    }

    setQueryPath (productID, dispatch) {
        let { linkPath, linkFilter } = setLinkData(productID);

        browserHistory.push(linkPath);
        dispatch(setVisibilityFilter(linkFilter));
    }

    render () {
      let { children, setClassName } = this.props;
      let newClassName = setClassName || '';

      return (
        <p className={ newClassName }
            onClick={ this.handleClickItem } >
            { children }
        </p>
      );
    }
}

ItemContainer.PropTypes = {
    children: PropTypes.object.isRequired,
    productID: PropTypes.number.isRequired,
    setClassName: PropTypes.string.isRequired
};

export default connect()(ItemContainer);
