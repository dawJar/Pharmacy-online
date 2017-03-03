import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/panelDrugs.scss';


const PanelHeading = ({
    heading,
    whichPanelStyle
}) => {

    let newClassName = 'panel-heading ' + whichPanelStyle;

    return (
        <div className={ newClassName }>
            { heading || 'all' }
        </div>
    );
}

PanelHeading.PropTypes = {
    heading: PropTypes.string.isRequired, 
    whichPanelStyle: PropTypes.string.isRequired
};

export default PanelHeading;
