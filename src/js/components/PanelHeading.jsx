import React, { PropTypes } from 'react';

import '../../sass/componentStyles/panelDrugs.scss';

const PanelHeading = ({ heading }) => (
    <div className="panel-heading">
        { heading || 'all' }
    </div>
)

export default PanelHeading;
