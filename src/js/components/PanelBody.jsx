import React from 'react';

import * as constants from '../constants/AppConstants';

import DrugContainer from '../containers/DrugContainer';
import DrugList from './DrugList';
import ButtonControlContainer from '../containers/ButtonControlContainer';


const PanelBody = ({
    btnShowMore,
    ...otherProps
}) => {

    return (
        <div className="panel-body">
            <DrugContainer { ...otherProps }>
                <DrugList />
            </DrugContainer>

            { (btnShowMore) ?
              <ButtonControlContainer
                  control={ constants.BTN_CONTROL.SHOW_MORE }
                  { ...otherProps }
              >
                  show more...
              </ButtonControlContainer>
             : null }
        </div>
    );
}

export default PanelBody;
