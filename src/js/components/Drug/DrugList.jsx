import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/drug.scss';

import Drug from './Drug';
import ButtonNextPrev from '../Buttons/ButtonNextPrev';


const DrugList = ({
    drugs,
    showOnSale,
    drugIndex,
    drugsPerPage,
    visibilityFilter,
    onClickPrevNext,
    ...otherProps
}) => {

    let checkFilter = (visibilityFilter === 'shopping_cart');
    let newClassNameForRow = 'row';
    newClassNameForRow += (showOnSale) ? ' row-as-flex' : '';
    // current visible drug on sale in "carousel"
    let drugOnSale = drugs.map((drug) => <Drug
                                            key={drug.id}
                                            filterIsShoppingCart={ checkFilter }
                                            { ...drug }
                                            { ...otherProps } />);

// TODO: duplicaled showAsShoppingCart and filterIsShoppingCart!
    // shows 4 as default in categories with "btn show more"
    // shows all in shopping-cart depends on checkFilter
    let drugsToShow = drugs.slice(0, (checkFilter) ? drugs.length : drugsPerPage)
                            .map((drug) => <Drug
                                                key={drug.id}
                                                filterIsShoppingCart={ checkFilter }
                                                showAsShoppingCart={ checkFilter }
                                                { ...drug }
                                                { ...otherProps } />);

    return (
        <div className="panel-group">
            <div className={ newClassNameForRow }>

                { (showOnSale) ?
                    <div className="col-xs-1">
                        <ButtonNextPrev
                            setClassName="next-prev-button"
                            direction="left"
                            onClickPrevNext={ onClickPrevNext }
                        />
                    </div> : null
                }

                <div className={ showOnSale ? "col-xs-10" : "col-xs-12"}>
                    { (showOnSale) ?
                        drugOnSale[drugIndex] :
                        drugsToShow
                    }
                </div>

                { (showOnSale) ?
                    <div className="col-xs-1">
                        <ButtonNextPrev
                            setClassName="next-prev-button pull-right"
                            direction="right"
                            onClickPrevNext={ onClickPrevNext }
                        />
                    </div> : null
                }
            </div>
        </div>
    );
}

DrugList.PropTypes = {
    drugs: PropTypes.arrayOf(PropTypes.object.isRequired),
    showOnSale: PropTypes.bool.isRequired,
    drugIndex: PropTypes.number.isRequired,
    drugsPerPage: PropTypes.number.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
    onClickPrevNext: PropTypes.func.isRequired,
};

export default DrugList;
