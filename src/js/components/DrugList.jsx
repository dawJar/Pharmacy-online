import React, { PropTypes } from 'react';

import Drug from './Drug';
import ButtonNextPrev from './ButtonNextPrev';

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

    // current visible drug on sale in "carousel"
    let drugOnSale = drugs.map((drug) => <Drug
                                            key={drug.id}
                                            filterIsShoppingCart={ checkFilter }
                                            { ...drug }
                                            { ...otherProps } />);

// TODO: duplicaled showAsShoppingCart and filterIsShoppingCart!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
            <div className="row">

                { (showOnSale) ? <ButtonNextPrev direction="left" onClickPrevNext={ onClickPrevNext } /> : null }

                <div className={ showOnSale ? "col-xs-10" : "col-xs-12"}>
                    { (showOnSale) ?
                        drugOnSale[drugIndex] :
                        drugsToShow
                    }
                </div>

                { (showOnSale) ? <ButtonNextPrev direction="right" onClickPrevNext={ onClickPrevNext } /> : null }
            </div>
        </div>
    );
}

export default DrugList;
