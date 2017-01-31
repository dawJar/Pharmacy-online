import React, { PropTypes } from 'react';

import CategoriesNav from '../CategoriesNav';
import Jumbotron from '../Jumbotron';
import PanelDrugs from '../PanelDrugs';

const Categories = () => (
    <div className="container-fluid">
        <CategoriesNav />
        <PanelDrugs showOnSale={ false } btnShowMore={ true } heading="All" />
    </div>
);

export default Categories;
