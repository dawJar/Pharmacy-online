import React, { PropTypes } from 'react';
import PanelDrugs from '../PanelDrugs';

const Category = () => (
    <PanelDrugs showOnSale={ false } btnShowMore={ true } heading="All" />
);

export default Category;
