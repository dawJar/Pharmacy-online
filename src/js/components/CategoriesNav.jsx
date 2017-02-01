import React from 'react';

// import '../../sass/componentStyles/nav.scss';

import NavToggle from './Nav/NavToggle';
import NavLinks from './Nav/NavLinks';

const CategoriesNav = (props) => (
    <nav className="navbar">
        <div className="container-fluid">
            <NavLinks { ...props } showBasket={ false } showAsSidebar={ true } />
        </div>
    </nav>
);

CategoriesNav.defaultProps = {
    linksData: [
        {
            linkName: "Health & Body",
            linkPath: "/categories/health&body",
        },
        {
            linkName: "Infections",
            linkPath: "/categories/infections",
        },
        {
            linkName: "Vitamins",
            linkPath: "/categories/vitamins",
        },
        {
            linkName: "Skincare",
            linkPath: "/categories/skincare",
        },
        {
            linkName: "Painkillers",
            linkPath: "/categories/painkillers",
        },
        {
            linkName: "Other",
            linkPath: "/categories/other",
        }
    ],
    linkActiveStyle: {
        color: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}

export default CategoriesNav;
