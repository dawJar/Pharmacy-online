import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Typeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';

import { setVisibilityFilter, addIdToLatest } from '../actions/actions';

// // TODO: change to container!!!!
// class ItemContainer extends Component {
//
//     constructor (props) {
//         super(props);
//         this.handleClickItem = this.handleClickItem.bind(this);
//     }
//
//     handleClickItem () {
//         let { dispatch, recivedArr } = this.props;
//         let arrLength = recivedArr.length;
//
//         if (arrLength === 1) {
//             let newId = recivedArr[0].id - 1;
//
//             let newLinkData = this.setLinkData(newId);
//             let { linkPath, linkFilter } = newLinkData;
//
//             browserHistory.push(linkPath);
//
//             dispatch(setVisibilityFilter(linkFilter));
//             dispatch(addIdToLatest(newId));
//         }
//     }
//
//     setLinkData (queryId) {
//         return {
//             linkPath: {
//                 pathname: '/search',
//                 query: { id: queryId }
//             },
//             linkFilter: "SHOW_ALL"
//         }
//     }
//
//     render () {
//       let { children } = this.props;
//       return (
//         <span onClick={ this.handleClickItem } >{ children }</span>
//       );
//     }
// }
//
// export default connect()(ItemContainer);
