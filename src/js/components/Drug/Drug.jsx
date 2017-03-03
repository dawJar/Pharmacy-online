import React from 'react';

import '../../../sass/componentStyles/drug.scss';

import Image from '../Image';
import DrugDetails from './DrugDetails';
import DrugControls from './DrugControls';


const Drug = (props) => {

    return (
        <div className='row drug-style'>
            <Image />
            <DrugDetails { ...props } />
            <DrugControls { ...props } />
        </div>
    );
}

export default Drug;
