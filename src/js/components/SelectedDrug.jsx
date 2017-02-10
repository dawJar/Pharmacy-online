import React from 'react';

import DrugContainer from '../containers/DrugContainer';
import Drug from './Drug';


const SelectedDrug = ({ idToShow, drugs, ...otherProps }) => {
  // console.log(drugs);
  return (
        <Drug { ...drugs[idToShow] } />
  );
}

export default SelectedDrug;
