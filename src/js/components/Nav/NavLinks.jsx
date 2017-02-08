import React, { Component, PropTypes } from 'react';

import '../../../sass/componentStyles/shoppingCart.scss';
NavLinkContainer
import NavLinkContainer from '../../containers/NavLinkContainer';
import Basket from '../Basket';


const NavLinks = ({
    showAsSidebar,
    showBasket,
    linksData,
    basket,
    ...otherProps
}) => {

    const links = linksData.map((li, i) => {
        return <NavLinkContainer key={i} data={ li } { ...otherProps } />
    });

    return (
        <div className={ (showAsSidebar) ? "sidebar-wrapper" : "collapse navbar-collapse" } id="myNavbar">
            <ul className={ (showAsSidebar) ? "sidebar-nav" : "nav navbar-nav"}>

                { links }

                { (showBasket) ? <Basket data={ basket } { ...otherProps } /> : null }

            </ul>
        </div>
    );
}

export default NavLinks;
