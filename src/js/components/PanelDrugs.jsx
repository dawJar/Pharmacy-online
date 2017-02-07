import React, { Component } from 'react';

import DrugContainer from '../containers/DrugContainer';
import DrugList from './DrugList';
import Drug from './Drug';
import PanelHeading from './PanelHeading';
import ButtonShowMoreContainer from '../containers/ButtonShowMoreContainer';

class PanelDrugs extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const { btnShowMore, heading, params, ...otherProps } = this.props;

        return (
            <div className="panel panel-success">

                <PanelHeading heading={ heading || params.category } />

                <div className="panel-body">
                    <DrugContainer>
                        {/* <DrugList drugsPage={ drugsPerPage } { ...otherProps } /> */}
                        <DrugList { ...otherProps } />
                    </DrugContainer>

                    { (btnShowMore) ? <ButtonShowMoreContainer { ...otherProps } /> : null }
                </div>
            </div>
        );
    }
}

export default PanelDrugs;
