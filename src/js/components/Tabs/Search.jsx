import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContent.scss';

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

            <DrugContainer>
                <TypeaheadElement { ...otherProps } />
            </DrugContainer>

            { (selectedDrug) ?
                <DrugContainer forceFilterAll>
                  <SelectedDrug idToShow={ selectedDrugId } />
                </DrugContainer> : null
            }

            <LatestResultsContainer />

        </div>
    );
}

export default Search;
