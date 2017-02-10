import React, { PropTypes } from 'react';

import TypeaheadElement from '../TypeaheadElement';
import DrugContainer from '../../containers/DrugContainer';
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
        <div className="container-fluid">

            <DrugContainer>
                <TypeaheadElement { ...otherProps } />
            </DrugContainer>

            { (selectedDrug) ?
                <DrugContainer forceFilterAll>
                  <SelectedDrug idToShow={ selectedDrugId } />
                </DrugContainer> : null
            }

        </div>
    );
}

export default Search;
