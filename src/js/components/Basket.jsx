import React from 'react';

import NavLinkContainer from '../containers/NavLinkContainer';


const Basket = (props) => (
  <NavLinkContainer { ...props } >

      <span className="glyphicon glyphicon-shopping-cart shopping-cart"></span>
      <span id="basket">Basket</span>

  </NavLinkContainer>
)

export default Basket;
