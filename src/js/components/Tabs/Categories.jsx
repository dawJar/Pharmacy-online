import React, { PropTypes } from 'react';

import Jumbotron from '../Jumbotron';
import PanelDrugs from '../PanelDrugs';

const Categories = () => (
    <div className="container-fluid">
        <PanelDrugs showOnSale={ false } btnShowMore={ true } heading="All" />
    </div>
);

export default Categories;
