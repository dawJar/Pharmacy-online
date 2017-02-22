import React, { PropTypes } from 'react';

import '../../sass/componentStyles/drug.scss';

import Image from './Image';
import DrugDetails from './DrugDetails';
import DrugControls from './DrugControls';


const Drug = ({
    filterIsShoppingCart,
    ...otherProps
}) => {

    return (
        <div className='row drug-style '>
            <Image />
            <DrugDetails { ...otherProps } />
            <DrugControls { ...otherProps } />
        </div>
    );
}

export default Drug;
