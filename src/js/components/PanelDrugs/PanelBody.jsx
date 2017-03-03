import React from 'react';

import '../../../sass/componentStyles/drug.scss';
import * as constants from '../../constants/AppConstants';

import DrugList from '../Drug/DrugList';
import DrugContainer from '../../containers/DrugContainer';
import ButtonControlContainer from '../../containers/ButtonControlContainer';


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
                <div className="show-more-container">
                    <ButtonControlContainer
                        control={ constants.BTN_CONTROL.SHOW_MORE }
                        whichPanelStyle='show-more'
                        btnShowMore
                        { ...otherProps }
                    >
                        show more...
                    </ButtonControlContainer>
                </div>
             : null }
        </div>
    );
}

export default PanelBody;
