import React, { PropTypes } from 'react';

import '../../sass/componentStyles/drug.scss';

import Image from './Image';
import DrugDetails from './DrugDetails';
import DrugControls from './DrugControls';
import DrugQuantityContainer from '../containers/DrugQuantityContainer';


const Drug = ({
    filterIsShoppingCart,
    stylesForSalesTab,
    ...otherProps
}) => {
    // let insertClassName = (stylesForSalesTab) ? 'sale-drugs' : '';

    return (
        // <div className={ 'row drug-style ' + insertClassName }>
        <div className='row drug-style '>
            <Image />
            <DrugDetails { ...otherProps } />
            <DrugControls { ...otherProps } />
        </div>
    );
}

export default Drug;
