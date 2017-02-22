import React from 'react';

import '../../sass/componentStyles/totalPrice.scss';


const TotalPrice = ({ totalPrice }) => (
    <p className="total-price-container pull-right">
        total price: &nbsp;
        <span className="total-price">{ totalPrice }</span>
        &nbsp; pln
    </p>
);

export default TotalPrice;
