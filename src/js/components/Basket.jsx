import React from 'react';

import NavLink from './Nav/NavLink';

const Basket = ({ ...restProps }) => (
  <NavLink { ...restProps } >

      <span className="glyphicon glyphicon-shopping-cart shopping-cart"></span>
      <span id="basket">Basket</span>

  </NavLink>
)

export default Basket;
