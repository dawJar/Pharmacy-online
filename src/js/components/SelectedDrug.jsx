import React from 'react';

import DrugContainer from '../containers/DrugContainer';
import Drug from './Drug';


const SelectedDrug = ({ idToShow, drugs, ...otherProps }) => {
  return (
        <Drug { ...drugs[idToShow] } />
  );
}

export default SelectedDrug;
