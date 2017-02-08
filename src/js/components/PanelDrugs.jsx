import React, { Component } from 'react';

import * as constants from '../constants/AppConstants';

import DrugContainer from '../containers/DrugContainer';
import DrugList from './DrugList';
import Drug from './Drug';
import PanelHeading from './PanelHeading';
import ButtonControlContainer from '../containers/ButtonControlContainer';

const PanelDrugs = ({ btnShowMore, heading, params, ...otherProps }) => (
    <div className="panel panel-success">

        <PanelHeading heading={ heading || params.category } />

        <div className="panel-body">
            <DrugContainer>
                {/* <DrugList drugsPage={ drugsPerPage } { ...otherProps } /> */}
                <DrugList { ...otherProps } />
            </DrugContainer>

            { (btnShowMore) ?
              <ButtonControlContainer { ...otherProps } control={ constants.BTN_CONTROL.SHOW_MORE } >
                show more...
              </ButtonControlContainer>
             : null }
        </div>
    </div>
);

export default PanelDrugs;
