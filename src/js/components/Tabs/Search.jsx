import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContent.scss';

import DrugContainer from '../../containers/DrugContainer';
import LatestResultsContainer from '../../containers/LatestResultsContainer';
import SearchHeading from '../SearchHeading';
import SelectedDrug from '../SelectedDrug';


const Search = ({
    params: { productID },
    location: { query, query: { id } },
    children,
    ...otherProps
}) => {

    let selectedDrug = query && id;
    let selectedDrugId = id;

    return (
        <div className="container-fluid main-content">
            <SearchHeading />

            <LatestResultsContainer />

            { (selectedDrug) ?
                <DrugContainer
                    forceFilterAll
                    whichPanelStyle='search-tab'
                >
                    <SelectedDrug idToShow={ selectedDrugId } />
                </DrugContainer> : null
            }
        </div>
    );
}

export default Search;
