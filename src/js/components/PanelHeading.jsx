import React, { PropTypes } from 'react';

import '../../sass/componentStyles/panelDrugs.scss';

const PanelHeading = ({ heading, whichPanelStyle }) => {
    
    let newClassName = 'panel-heading ' + whichPanelStyle;

    return (
        <div className={ newClassName }>
            { heading || 'all' }
        </div>
    );
}

export default PanelHeading;
