import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCurrentVisibleDrug, setVisibilityFilter } from '../actions/actions';
import { getVisibleDrugs, drugListReducer } from '../reducers/reducers';


class DrugContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClickPrevNext = this.handleClickPrevNext.bind(this);
    }

    // force setVisibilityFilter before rendering SelectedDrug in Search component
    componentWillMount() {
        let { forceFilterAll, dispatch } = this.props;
        if (forceFilterAll)
            dispatch(setVisibilityFilter('SHOW_ALL'));
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
        // debugger;
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
    let {
        drugListReducer: { setCurrentVisibleDrug },
        drugsReducer: { fetchDrugs },
        cartReducer: { addedIds, quantityById },
        visibilityReducer: { visibilityFilter }
    } = state;

    let { drugIndex, drugsLength, drugsPerPage } = setCurrentVisibleDrug;

    return {
        drugs: getVisibleDrugs(
            fetchDrugs,
            visibilityFilter,
            addedIds
        ),
        drugIndex,
        drugsLength,
        drugsPerPage
    }
}

export default connect(
    mapStateToProps,
)(DrugContainer)
