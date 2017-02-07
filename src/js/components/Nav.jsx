import React from 'react';

import '../../sass/componentStyles/nav.scss';

import NavToggle from './Nav/NavToggle';
import NavLinksContainer from '../containers/NavLinksContainer';

const Nav = (props) => (
    <nav className="navbar">
        <div className="container-fluid">
            <NavToggle />
            {/* <NavLinksContainer { ...props } showBasket={ true } showAsSidebar={ false } /> */}
            <NavLinksContainer { ...props } />
        </div>
    </nav>
);

Nav.defaultProps = {
    showBasket: true,
    showAsSidebar: false,
    linksData: [
        {
            linkPath: "/sale",
            linkName: "Sale!",
            linkFilter: "SHOW_ON_SALE"
        },
        {
            linkPath: "/categories",
            linkName: "Categories",
            linkFilter: "SHOW_HEALTH_BODY"
        },
        {
            linkPath: "/search",
            linkName: "Search",
            linkFilter: "SHOW_ALL"
        },
        {
            linkPath: "/about",
            linkName: "About",
            linkFilter: "SHOW_SALE"
        }
    ],
    basket: {
        linkPath: "/shopping-cart",
        linkName: "ShoppingCart",
        linkFilter: "SHOW_SALE"
    },
    linkActiveStyle: {
        color: '#7BB480',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}

export default Nav;
