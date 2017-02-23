import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContent.scss';
// TODO: ADD TO SEARCH HEADING COMPONENT
import '../../../sass/componentStyles/search.scss';

import DrugContainer from '../../containers/DrugContainer';
import LatestResultsContainer from '../../containers/LatestResultsContainer';
import TypeaheadElement from '../TypeaheadElement';
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

            { (selectedDrug) ?
                <DrugContainer
                    forceFilterAll
                    whichPanelStyle='search-tab'
                >
                    <SelectedDrug idToShow={ selectedDrugId } />
                </DrugContainer> : null
            }

            <LatestResultsContainer />

        </div>
    );
}

export default Search;


const SearchHeading = (props) => {

    return (
        <div className="row search-tab-heading">
            <p className="col-xs-2 col-sm-1 search-heading">Search: </p>
            <div className="col-xs-10 col-sm-11">
                <DrugContainer>
                    <TypeaheadElement { ...props } />
                </DrugContainer>
            </div>
        </div>
    );
}
