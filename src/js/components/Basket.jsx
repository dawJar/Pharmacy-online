import React from 'react';

import NavLink from './Nav/NavLink';

const Basket = ({ onClickLink, ...restProps }) => (
  <NavLink onClickLink={ onClickLink } { ...restProps } >

      <span className="glyphicon glyphicon-shopping-cart shopping-cart"></span>
      <span id="basket">Basket</span>

  </NavLink>
)

export default Basket;
