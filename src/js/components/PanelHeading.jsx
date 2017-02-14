import React, { PropTypes } from 'react';

const PanelHeading = ({ heading, params }) => (
    <div className="panel-heading">
        { heading || 'all' }
    </div>
)

export default PanelHeading;
