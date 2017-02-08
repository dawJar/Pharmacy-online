import React, { Component, PropTypes } from 'react';

import ButtonGroup from './ButtonGroup';

const Drug = ({
      id,
      onSale,
      drugCompany,
      drugDescription,
      drugCategory,
      drugExpiration,
      drugName,
      drugPrice,
      fdaCode,
      addClassNames
  }) => (
    <div className={ addClassNames }>
        <h3>{ drugName }</h3>
        <p>onsale: { (onSale) ? 'sale' : 'not on sale' }</p>
        <p>company: { drugCompany }</p>
        <p>price: { drugPrice }</p>
        <p>category: { drugCategory }</p>

        <ButtonGroup drugId={ id } />

    </div>
);

export default Drug
