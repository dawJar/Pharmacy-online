import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/actions';
// import { getVisibleDrugs, getVisibleFilter } from '../reducers/drugsReducer';

// import Drug from '../components/Drug';

const DrugContainer = ({
    children,
    drugStyle,
    drugs,
    filters,
    // ...rest
}) => {
    console.log(filters);
    return (
        <div>
            {
                (drugStyle === 'sale') ? React.cloneElement(children, { drugs }) : null
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
    drugs: state.visibleDrugs,
    filters: state.visibilityFilter
})

export default connect(
    mapStateToProps,
// { addToCart }
)(DrugContainer)
