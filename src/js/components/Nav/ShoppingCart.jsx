import React, { Component } from 'react';

import '../../../sass/componentStyles/shoppingCart.scss';

export default class ShoppingCart extends Component {
  render () {
    return (
      <div>
        <span className="glyphicon glyphicon-shopping-cart shopping-cart"> </span>
      </div>
    );
  }
}
