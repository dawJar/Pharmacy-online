import React, { Component } from 'react';

import DrugContainer from '../containers/DrugContainer';
import DrugList from './DrugList';
import Drug from './Drug';
import PanelHeading from './PanelHeading';
import ButtonShowMore from './ButtonShowMore';

class PanelDrugs extends Component {

    constructor (props) {
        super(props);
        this.handleShowMore = this.handleShowMore.bind(this);
        this.state = {
            drugsPerPage: 4
        }
    }

    handleShowMore () {
        let drugs = this.state.drugsPerPage + 4;
        this.setState({
            drugsPerPage: drugs
        });
    }

    render () {
        const { btnShowMore, ...restProps } = this.props;
        const { drugsPerPage } = this.state;

        return (
            <div className="panel panel-success">

                <PanelHeading { ...restProps } />

                <div className="panel-body">
                    <DrugContainer drugStyle="sale">
                        <DrugList { ...restProps } drugsPage={ drugsPerPage } />
                    </DrugContainer>

                    { (btnShowMore) ? <ButtonShowMore onClickShowMore={ this.handleShowMore } /> : null }
                </div>
            </div>
        );
    }
}

export default PanelDrugs;
