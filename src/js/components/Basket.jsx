import React from 'react';

import NavLinkContainer from '../containers/NavLinkContainer';


const Basket = ({ ...restProps }) => (
  <NavLinkContainer { ...restProps } >

      <span className="glyphicon glyphicon-shopping-cart shopping-cart"></span>
      <span id="basket">Basket</span>

  </NavLinkContainer>
)

export default Basket;
