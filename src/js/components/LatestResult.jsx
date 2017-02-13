import React, { PropTypes } from 'react';

import ItemContainer from '../containers/ItemContainer';

const LatestResult = ({ drugs, resultID, resultLength, ...otherProps }) => {
    let newClassName = "col-sm-" + 12 / resultLength;
    let currentDrugName = drugs[resultID].drugName;

    return (
        <div className={ newClassName }>
            <ItemContainer productID={ resultID } { ...otherProps }>
                { currentDrugName }
            </ItemContainer>
        </div>
    );
}


export default LatestResult;
