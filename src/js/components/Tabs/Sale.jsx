import React, {PropTypes} from 'react';

import '../../../sass/componentStyles/tabContent.scss';

import Jumbotron from '../Jumbotron';
import PanelDrugs from '../PanelDrugs';

const Sale = (props) => (
    <div className="container-fluid main-content">

        {/* <Jumbotron/> */}

        <PanelDrugs
            showOnSale={ true }
            btnShowMore={ false }
            heading="Sale!"
            whichPanelStyle='sale-tab'
            { ...props }
        />

    </div>
);

export default Sale;
