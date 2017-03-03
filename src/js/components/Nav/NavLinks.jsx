import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/shoppingCart.scss';

import NavLinkContainer from '../../containers/NavLinkContainer';
import Basket from '../Basket';


const NavLinks = ({
    showAsSidebar,
    showBasket,
    linksData,
    basket,
    ...otherProps
}) => {
  
    let links = linksData.map((li, i) => {
        return <NavLinkContainer key={ i } data={ li } { ...otherProps } />
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

NavLinks.propTypes = {
    showAsSidebar: PropTypes.bool.isRequired,
    showBasket: PropTypes.bool.isRequired,
    linksData: PropTypes.arrayOf(PropTypes.object.isRequired),
    basket: PropTypes.object.isRequired
};

export default NavLinks;
