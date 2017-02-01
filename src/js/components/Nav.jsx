import React from 'react';

import '../../sass/componentStyles/nav.scss';

import NavToggle from './Nav/NavToggle';
import NavLinks from './Nav/NavLinks';

const Nav = (props) => (
    <nav className="navbar">
        <div className="container-fluid">
            <NavToggle { ...props }/>
            <NavLinks { ...props } showBasket={ true } showAsSidebar={ false } />
        </div>
    </nav>
);

Nav.defaultProps = {
    linksData: [
        {
            linkPath: "/sale",
            linkName: "Sale!"
        },
        {
            linkPath: "/categories",
            linkName: "Categories"
        },
        {
            linkPath: "/search",
            linkName: "Search"
        },
        {
            linkPath: "/about",
            linkName: "About"
        }
    ],
    basket: {
        linkPath: "/shopping-cart",
        linkName: "ShoppingCart"
    },
    linkActiveStyle: {
        color: '#7BB480',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}

export default Nav;
