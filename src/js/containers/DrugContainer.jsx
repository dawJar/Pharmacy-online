import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCurrentVisibleDrug } from '../actions/actions';
import { getVisibleDrugs, drugListReducer } from '../reducers/reducers';


class DrugContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClickPrevNext = this.handleClickPrevNext.bind(this);
    }

    handleClickPrevNext (direction) {
        let { drugs, drugIndex } = this.props;
        let countDrugs = drugs.length - 1;
        let newDrugIndex = drugIndex;

        if (direction === 'left' && drugIndex > 0) {
            newDrugIndex -= 1;
        } else if (direction === 'right' && drugIndex < countDrugs) {
            newDrugIndex += 1;
        }

        this.props.dispatch(setCurrentVisibleDrug(newDrugIndex));
    }

    render () {
        const { children, drugs, drugIndex, ...otherProps } = this.props;
        console.log(drugs);

        return (
            <div>
                {
                    React.cloneElement(children, {
                                            onClickPrevNext: this.handleClickPrevNext,
                                            drugs,
                                            drugIndex,
                                            ...otherProps
                                        })
                }
            </div>
        );
    }
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

const mapStateToProps = state => {
    let { drugListReducer, drugsReducer, cartReducer } = state;

    let { fetchDrugs, visibilityFilter } = drugsReducer;
    let { addedIds, quantityById } = cartReducer;
    let { drugIndex, drugsLength, drugsPerPage } = drugListReducer.setCurrentVisibleDrug;

    return {
        drugs: getVisibleDrugs(
            fetchDrugs,
            visibilityFilter,
            addedIds
        ),
        drugIndex: drugIndex,
        drugsLength: drugsLength,
        drugsPerPage: drugsPerPage
    }
}


export default connect(
    mapStateToProps,
// { addToCart }
)(DrugContainer)
