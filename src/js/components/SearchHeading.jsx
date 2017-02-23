import React, { PropTypes } from 'react';

import '../../sass/componentStyles/search.scss';

import DrugContainer from '../containers/DrugContainer';
import TypeaheadElement from './TypeaheadElement';


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

export default SearchHeading;
