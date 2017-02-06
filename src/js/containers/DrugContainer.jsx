import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/actions';
// import { visibleDrugs } from '../reducers/drugsReducer';

// import Drug from '../components/Drug';

const DrugContainer = ({
        children,
        drugs,
        currentFilter
    }) => {
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
    drugs: state.fetchDrugs,
    // currentFilter: state.visibilityFilter
})

export default connect(
    mapStateToProps,
// { addToCart }
)(DrugContainer)
