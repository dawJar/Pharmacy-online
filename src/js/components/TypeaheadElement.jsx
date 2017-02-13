import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Typeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';
import { setVisibilityFilter, addIdToLatest } from '../actions/actions';

// TODO: change to container!!!!
class TypeaheadElement extends Component {

    constructor (props) {
        super(props);
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleClickItem (recivedArr) {
        let arrLength = recivedArr.length;

        if (arrLength === 1) {
            this.handleSearchChoice(recivedArr[0].id - 1);
        }
    }

    handleSearchChoice (newId) {
        let newLinkData = this.setLinkData(newId);

        let { dispatch } = this.props;
        let { linkPath, linkFilter } = newLinkData;

        // push path to route
        browserHistory.push(linkPath);

        dispatch(setVisibilityFilter(linkFilter));
        dispatch(addIdToLatest(newId));
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
        let { drugs } = this.props;

        return (
            <div>
                <Typeahead
                    autoFocus={ true }
                    clearButton={ true }
                    maxResults={ 5 }
                    minLength={ 3 }
                    options={ drugs }
                    labelKey={option => `${option.drugName}`}
                    onChange={ this.handleClickItem }
                />
            </div>
        );
    }
}

export default connect()(TypeaheadElement);
