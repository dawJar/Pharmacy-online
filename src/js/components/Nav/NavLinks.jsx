import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../../actions/actions';

import '../../../sass/componentStyles/shoppingCart.scss';

import NavLink from './NavLink';
import Basket from '../Basket';


class NavLinks extends Component {

    constructor(props) {
        super(props);
        this.handleClickSetFilter = this.handleClickSetFilter.bind(this);
    }

    handleClickSetFilter (recievedFilter) {
        // console.log(this.props);
        // debugger;
        this.props.dispatch(setVisibilityFilter(recievedFilter));
    }

    render() {
        const { showAsSidebar, showBasket, linksData, linkActiveStyle, basket } = this.props;

        const links = linksData.map((link, i) => {
            return <NavLink onClickSetFilter={ this.handleClickSetFilter } key={i} data={ link } linkActiveStyle={ linkActiveStyle } />
        });

        return (
            <div className={ (showAsSidebar) ? "sidebar-wrapper" : "collapse navbar-collapse" } id="myNavbar">
                <ul className={ (showAsSidebar) ? "sidebar-nav" : "nav navbar-nav"}>

                    { links }

                    { (showBasket) ? <Basket onClickSetFilter={ this.handleClickSetFilter } data={ basket } linkActiveStyle={ linkActiveStyle } /> : null }

                </ul>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleClickSetFilter: (recievedFilter) => {
//             dispatch(setVisibilityFilter(recievedFilter))
//         }
//     }
// }

export default connect(
  // mapDispatchToProps
)(NavLinks);
