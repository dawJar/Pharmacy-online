import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/drugDetails.scss';

import DrugDetailsAll from './DrugDetailsAll';
import DrugDetailsSelected from './DrugDetailsSelected';


const DrugDetails = ({
    drugName,
    whichPanelStyle,
    ...otherProps
}) => {
    let isItSaleTab = whichPanelStyle === 'sale-tab';
    let isItCategoriesTab = whichPanelStyle === 'categories-tab';
    let isItBasketTab = whichPanelStyle === 'basket-tab';
    let isItSearchTab = whichPanelStyle === 'search-tab';
    return (
      <div className="col-xs-12 col-sm-8 col-md-7">
          <h3 className="heading-drug-details">{ drugName }</h3>
          {
              (isItSaleTab) ?
                  <DrugDetailsSelected
                      saleTab={ isItSaleTab }
                      { ...otherProps }
                  /> : null
          }
          {
              (isItCategoriesTab || isItBasketTab) ?
                  <DrugDetailsSelected
                      saleTab={ isItSaleTab }
                      { ...otherProps }
                  /> : null
          }
          {
              (isItSearchTab) ?
                    <DrugDetailsAll
                        { ...otherProps }
                    /> : null
          }
      </div>
    );
}

DrugDetails.PropTypes = {
    drugName: PropTypes.string.isRequired,
    whichPanelStyle: PropTypes.string.isRequired
};

export default DrugDetails;
