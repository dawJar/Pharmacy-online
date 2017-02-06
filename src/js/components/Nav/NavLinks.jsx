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
        this.props.dispatch(setVisibilityFilter(recievedFilter));
    }

    render() {
        const { showAsSidebar, showBasket, linksData, basket, ...otherProps } = this.props;

        const links = linksData.map((li, i) => {
            return <NavLink onClickSetFilter={ this.handleClickSetFilter } key={i} data={ li } { ...otherProps } />
        });

        return (
            <div className={ (showAsSidebar) ? "sidebar-wrapper" : "collapse navbar-collapse" } id="myNavbar">
                <ul className={ (showAsSidebar) ? "sidebar-nav" : "nav navbar-nav"}>

                    { links }

                    { (showBasket) ? <Basket onClickSetFilter={ this.handleClickSetFilter } data={ basket } { ...otherProps } /> : null }

                </ul>
            </div>
        );
    }
}


export default connect()(NavLinks);
