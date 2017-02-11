import React, { PropTypes } from 'react';

import NavLinkContainer from '../containers/NavLinkContainer';

const LatestResult = ({ drugs, resultId, resultLength, linksData }) => {
    let newClassName = "col-sm-" + 12 / resultLength;
    return (
        <div className={ newClassName }>
            { drugs[resultId].drugName }
            {/* <NavLinkContainer data={ linksData } /> */}
        </div>
    );
}

LatestResult.defaultProps = {
    // linksData: [
    // {
    //     linkName: "check again...",
    //     linkPath: "/categories/health&body",
    //     linkFilter: "SHOW_HEALTH_BODY"
    // },
}

export default LatestResult;
