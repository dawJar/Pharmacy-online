import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions/actions';
import {getVisibleDrugs} from '../reducers/drugsReducer';

import Drug from '../components/Drug';

// const DrugContainer = ({ drugs }) => (
//     <div className="panel-group">
//         { drugs.map( drug => <Drug key={drug.id} drugId={drug.id}
//                                 drugCompany={ drug.drug_company }
//                                   drugDescription={ drug.drug_description }
//                                   drugExpiration={ drug.drug_expiration }
//                                   drugName={ drug.drug_name }
//                                   drugPrice={ drug.drug_price }
//                                   drugProcedure={ drug.drug_procedure }
//                                   fdaCode={ drug.fda_code } />
//                             )}
//    </div>
// )

// const DrugContainer = ({ drugs, children, drugStyle }) => (
//     <div>
//         { (drugStyle === 'sale') ?
//                 React.cloneElement(children, { drugs }) : null
//         }
//     </div>
// )

class DrugContainer extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const { children, drugStyle, ...rest } = this.props;
        return (
            <div>
                { (drugStyle === 'sale') ?
                        React.cloneElement(children, { ...rest }) : null
                }
            </div>
        );
    }
}

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
    drugs: getVisibleDrugs(state.drugs)
})

export default connect(mapStateToProps,
// { addToCart }
)(DrugContainer)
