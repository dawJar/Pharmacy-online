import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContent.scss';

import DrugContainer from '../../containers/DrugContainer';
import LatestResultsContainer from '../../containers/LatestResultsContainer';
import SearchHeading from '../Search/SearchHeading';
import SelectedDrug from '../Search/SelectedDrug';


const Search = ({
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

Search.PropTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.objectOf(PropTypes.number.isRequired)
};

export default Search;
