import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import DrugContainer from '../containers/DrugContainer';
import LatestResult from '../components/LatestResult';


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
        <div className="row">
            { latestResultsToRender }
        </div>
    );
}

LatestResultsContainer.propTypes = {
    latestResults: PropTypes.arrayOf(
        PropTypes.number.isRequired
    )
}

const mapStateToProps = state => {
    let { searchReducer: { latestResults } } = state;

    return {
        latestResultsLength: latestResults.length,
        latestResults
    }
}

export default connect(mapStateToProps)(LatestResultsContainer)
