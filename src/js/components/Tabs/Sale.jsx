import React from 'react';

import '../../../sass/componentStyles/tabContent.scss';

import SaleTabContent from '../SaleTabContent';
import PanelDrugs from '../PanelDrugs';


const Sale = (props) => (
    <div className="container-fluid main-content">
        <PanelDrugs
            showOnSale={ true }
            btnShowMore={ false }
            heading="Sale!"
            whichPanelStyle='sale-tab'
            { ...props }
        />
      <SaleTabContent />
    </div>
);

export default Sale;
