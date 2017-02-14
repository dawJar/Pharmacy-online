import React, { PropTypes } from 'react';

import ButtonGroup from './ButtonGroup';
import DrugQuantityContainer from '../containers/DrugQuantityContainer';


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
    addClassNames,
    filterIsShoppingCart,
    ...otherProps
}) => (
    <div className={ addClassNames }>
        <h3>{ drugName }</h3>
        <p>onsale: { (onSale) ? 'sale' : 'not on sale' }</p>
        <p>id: { id }</p>
        {/* <p>company: { drugCompany }</p>
        <p>price: { drugPrice }</p> */}
        <p>category: { drugCategory }</p>

        { (filterIsShoppingCart) ?
            <DrugQuantityContainer
                filterIsShoppingCart={ filterIsShoppingCart }
                drugID={ id }
                drugPrice={ drugPrice }
                { ...otherProps }
            /> : null
        }

        <ButtonGroup
            drugID={ id }
            drugPrice={ drugPrice }
            { ...otherProps }
        />

    </div>
);

export default Drug;
