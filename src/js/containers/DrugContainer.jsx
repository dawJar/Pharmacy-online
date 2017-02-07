import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCurrentVisibleDrug } from '../actions/actions';
import { getVisibleDrugs, drugListReducer } from '../reducers/reducers';

// import Drug from '../components/Drug';

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

        return (
            <div>
                {
                    React.cloneElement(children, {
                                            onClickPrevNext: this.handleClickPrevNext,
                                            test: 'test',
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

const mapStateToProps = state => ({
    drugs: getVisibleDrugs(
        state.drugsReducer.fetchDrugs,
        state.drugsReducer.visibilityFilter
    ),
    drugIndex: state.drugListReducer.setCurrentVisibleDrug.drugIndex,
    drugsLength: state.drugListReducer.setCurrentVisibleDrug.drugsLength
});


export default connect(
    mapStateToProps,
// { addToCart }
)(DrugContainer)
