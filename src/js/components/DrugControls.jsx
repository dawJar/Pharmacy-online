import React from 'react';

import ButtonGroup from './ButtonGroup';
import DrugQuantityContainer from '../containers/DrugQuantityContainer';


const DrugControls = ({
    id,
    drugPrice,
    showAsShoppingCart,
    ...otherProps
}) => {

    return (
        <div className="col-xs-12 col-sm-3 col-md-2">
            { (showAsShoppingCart) ?
                <DrugQuantityContainer
                    drugID={ id }
                    drugPrice={ drugPrice }
                    { ...otherProps }
                    /> : null
            }
            <ButtonGroup
                showAsShoppingCart={ showAsShoppingCart }
                drugID={ id }
                drugPrice={ drugPrice }
                { ...otherProps }
            />
        </div>
    );
}

export default DrugControls;
