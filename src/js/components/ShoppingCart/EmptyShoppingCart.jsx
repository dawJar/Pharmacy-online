import React from 'react';

import NavLinkContainer from '../../containers/NavLinkContainer';


const EmptyShoppingCart = ({ linksData }) => (
    <div className="empty-basket-container">
        <h2>Your shopping cart is empty.</h2>
        Check our...
        <NavLinkContainer data={ linksData } >
            main page
        </NavLinkContainer>
    </div>
);

export default EmptyShoppingCart;
