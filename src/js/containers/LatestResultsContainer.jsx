import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import '../../sass/componentStyles/latestResults.scss';

import DrugContainer from './DrugContainer';
import LatestResult from '../components/Search/LatestResult';


const LatestResultsContainer = ({
    latestResults,
    latestResultsLength
}) => {
    let latestResultsToRender = latestResults.map((result, i) =>
        <DrugContainer key={ i } >
            <LatestResult
                resultID={ result }
                resultLength={ latestResultsLength }
            />
        </DrugContainer>
    )

    return (
        <div className="row latest-results-row">
            { latestResultsToRender }
        </div>
    );
}

const mapStateToProps = state => {
    let { searchReducer: { latestResults } } = state;

    return {
        latestResultsLength: latestResults.length,
        latestResults
    }
}

LatestResultsContainer.propTypes = {
  latestResultsLength: PropTypes.number.isRequired,
  latestResults: PropTypes.arrayOf(
    PropTypes.number.isRequired
  )
}

export default connect(mapStateToProps)(LatestResultsContainer)
