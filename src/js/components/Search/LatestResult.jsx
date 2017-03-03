import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/latestResults.scss';

import ItemContainer from '../../containers/ItemContainer';


const LatestResult = ({
    drugs,
    resultID,
    resultLength,
    ...otherProps
}) => {

    let newClassName = `col-sm-${12 / resultLength} latest-result-item-container`;
    let currentDrugName = drugs[resultID].drugName;

    return (
        <div className={ newClassName } >
            <ItemContainer
                setClassName="latest-result-item"
                productID={ resultID }
                { ...otherProps }
            >
                { currentDrugName }
            </ItemContainer>
        </div>
    );
}

LatestResult.PropTypes = {
    drugs: PropTypes.arrayOf(PropTypes.object.isRequired),
    resultID: PropTypes.number.isRequired,
    resultLength: PropTypes.number.isRequired
};

export default LatestResult;
