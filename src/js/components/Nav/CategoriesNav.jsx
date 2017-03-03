import React from 'react';

import '../../../sass/componentStyles/nav.scss';

import NavToggle from './NavToggle';
import NavLinks from './NavLinks';


const CategoriesNav = (props) => (
    <nav className="navbar">
        <div className="container-fluid sidenav-categories">
            <NavLinks { ...props } />
        </div>
    </nav>
);

CategoriesNav.defaultProps = {
    showBasket: false,
    showAsSidebar: true,
    linksData: [
        {
            linkName: "Health & Body",
            linkPath: "/categories/health&body",
            linkFilter: "SHOW_HEALTH_BODY"
        },
        {
            linkName: "Infections",
            linkPath: "/categories/infections",
            linkFilter: "SHOW_INFECTIONS"
        },
        {
            linkName: "Vitamins",
            linkPath: "/categories/vitamins",
            linkFilter: "SHOW_VITAMINS"
        },
        {
            linkName: "Skincare",
            linkPath: "/categories/skincare",
            linkFilter: "SHOW_SKINCARE"
        },
        {
            linkName: "Painkillers",
            linkPath: "/categories/painkillers",
            linkFilter: "SHOW_PAINKILLERS"
        },
        {
            linkName: "Other",
            linkPath: "/categories/other",
            linkFilter: "SHOW_OTHER"
        }
    ],
    linkActiveStyle: {
        color: '#A740FF',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    basket: {}
}

export default CategoriesNav;
