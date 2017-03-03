import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/panelDrugs.scss';

import PanelHeading from './PanelHeading';
import PanelBody from './PanelBody';


const PanelDrugs = ({
    params: { category },
    heading,
    whichPanelStyle,
    ...otherProps
}) => {

    let newClassName = 'panel panel-default ' + whichPanelStyle;
    
    return (
        <div className={ newClassName } >
            <PanelHeading
                heading={ heading || category }
                whichPanelStyle={ whichPanelStyle }
            />
            <PanelBody
                whichPanelStyle={ whichPanelStyle }
                { ...otherProps }
            />
        </div>
    );
}

PanelDrugs.PropTypes = {
    heading: PropTypes.string.isRequired,
    params: PropTypes.objectOf(PropTypes.string.isRequired),
    whichPanelStyle: PropTypes.string.isRequired
};

export default PanelDrugs;
