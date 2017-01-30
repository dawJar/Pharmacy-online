import React from 'react';

import DrugContainer from '../containers/DrugContainer';
import DrugList from './DrugList';
import Drug from './Drug';

const PanelSale = () => (
    <div className="panel panel-success">
        <div className="panel-heading">
            Panel heading
        </div>
        <div className="panel-body">
            <DrugContainer drugStyle="sale">
                <DrugList showOnSale={true}/>
            </DrugContainer>
        </div>
    </div>
);

export default PanelSale;
