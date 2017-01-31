import React from 'react';

import '../../sass/componentStyles/nav.scss';

import NavToggle from './Nav/NavToggle';
import NavLinks from './Nav/NavLinks';

const CategoriesNav = (props) => (
    <nav className="navbar">
        <div className="container-fluid">
            <NavLinks { ...props } showBasket={ false } />
        </div>
    </nav>
);

CategoriesNav.defaultProps = {
    linksData: [
        {
            linkPath: "/sale",
            linkName: "All"
        },
        {
            linkPath: "/categories",
            linkName: "Health & Body"
        },
        {
            linkPath: "/search",
            linkName: "Infections"
        },
        {
            linkPath: "/about",
            linkName: "Vitamins"
        },
        {
            linkPath: "/search",
            linkName: "Skincare"
        },
        {
            linkPath: "/search",
            linkName: "Pain relief"
        },
        {
            linkPath: "/search",
            linkName: "Other"
        }
    ],
    linkActiveStyle: {
        color: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}

export default CategoriesNav;
