import React, {Component, PropTypes} from 'react';

import Drug from './Drug';
import ButtonNextPrev from './ButtonNextPrev';

const DrugList = ({ drugs, showOnSale, drugIndex, drugsPerPage, currentFilter, onClickPrevNext }) => {

    let checkFilter = (currentFilter === 'shopping_cart') ? true : false;
    let drugOnSale = drugs.map((drug) => <Drug key={drug.id} { ...drug }/>);
    let drugsToShow = drugs.slice(0, (checkFilter) ? drugs.length : drugsPerPage)
                            .map((drug) => <Drug key={drug.id}
                                                showAsShoppingCart={ checkFilter }
                                                { ...drug }  />);

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
