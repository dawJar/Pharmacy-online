import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/actions';
import { getVisibleDrugs } from '../reducers/reducers';

// import Drug from '../components/Drug';

const DrugContainer = ({
        children,
        drugs,
        currentFilter
    }) => {
        // console.log();
        return (
            <div>
                {
                    React.cloneElement(children, { drugs })
                }
            </div>
        );
};

DrugContainer.propTypes = {
    drugs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        onSale: PropTypes.bool.isRequired,
        drugCompany: PropTypes.string.isRequired,
        drugDescription: PropTypes.string.isRequired,
        drugExpiration: PropTypes.string.isRequired,
        drugName: PropTypes.string.isRequired,
        drugPrice: PropTypes.number.isRequired,
        drugCurrency: PropTypes.string.isRequired,
        fdaCode: PropTypes.string.isRequired,
        drugHowToUse: PropTypes.string.isRequired,
        drugCategory: PropTypes.string.isRequired
    }))
}

const mapStateToProps = state => ({
    drugs: getVisibleDrugs(
        state.drugsReducer.fetchDrugs,
        state.drugsReducer.visibilityFilter
    )
});

export default connect(
    mapStateToProps,
// { addToCart }
)(DrugContainer)
