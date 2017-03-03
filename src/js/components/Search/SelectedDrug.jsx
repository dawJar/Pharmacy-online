import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/search.scss';

import DrugContainer from '../../containers/DrugContainer';
import Drug from '../Drug/Drug';


const SelectedDrug = ({
    idToShow,
    drugs,
    ...otherProps
}) => (
      <div>
          <Drug
              { ...drugs[idToShow] }
              { ...otherProps }
              removeDetails
          />
        <div className="underscore-element pull-right"></div>
      </div>
);

SelectedDrug.PropTypes = {
    idToShow: PropTypes.number.isRequired,
    drugs: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default SelectedDrug;
