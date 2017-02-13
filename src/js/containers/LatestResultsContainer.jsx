import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DrugContainer from '../containers/DrugContainer';
import LatestResult from '../components/LatestResult';


class LatestResultsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { latestResults, latestResultsLength } = this.props;
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
};

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
