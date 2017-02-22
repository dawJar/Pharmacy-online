import React from 'react';
import '../../sass/componentStyles/drug.scss';
import * as constants from '../constants/AppConstants';

import DrugList from './DrugList';
import DrugContainer from '../containers/DrugContainer';
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
