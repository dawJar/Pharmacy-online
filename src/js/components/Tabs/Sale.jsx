import React, {PropTypes} from 'react';

import '../../../sass/componentStyles/tabContentStyle.scss';

import Jumbotron from '../Jumbotron';
import PanelDrugs from '../PanelDrugs';

const Sale = (props) => (
    <div className="container-fluid">

        <Jumbotron/>

        <PanelDrugs
          showOnSale={ true }
          btnShowMore={ false }
          heading="Sale!"
          { ...props }
        />

    </div>
);

export default Sale;
