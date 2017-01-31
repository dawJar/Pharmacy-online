import React, { PropTypes } from 'react';

import Jumbotron from '../Jumbotron';
import PanelDrugs from '../PanelDrugs';

const Sale = () => (
    <div className="container-fluid">
        <Jumbotron/>
        <PanelDrugs showOnSale={ true } btnShowMore={ false } heading="Sale!" />
    </div>
);

export default Sale;
