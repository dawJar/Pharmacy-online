import React from 'react';

import ButtonGroup from './ButtonGroup';


const DrugControls = ({
    id,
    drugPrice,
    filterIsShoppingCart,
    ...otherProps
}) => {

    return (
        <div className="col-xs-12 col-sm-3 col-md-2">
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
}

export default DrugControls;
