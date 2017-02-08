import React from 'react';

import PanelDrugs from '../PanelDrugs';

const ShoppingCart = ({ ...props }) => (
  <div className="container-fluid">
      <PanelDrugs showOnSale={ false } heading="Basket" { ...props }/>
  </div>
);

export default ShoppingCart;
