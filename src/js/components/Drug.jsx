import React, { PropTypes } from 'react';

import Image from './Image';
import DrugDetails from './DrugDetails';
import DrugControls from './DrugControls';
import DrugQuantityContainer from '../containers/DrugQuantityContainer';


const Drug = ({
    addClassNames,
    filterIsShoppingCart,
    ...otherProps
}) => (
    <div className={ addClassNames }>
        <div className="row">
            <Image />
            <DrugDetails { ...otherProps } />
            <DrugControls { ...otherProps } />
        </div>
    </div>
);

export default Drug;
