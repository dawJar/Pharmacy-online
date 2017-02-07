import React, { Component } from 'react';

import DrugContainer from '../containers/DrugContainer';
import DrugList from './DrugList';
import Drug from './Drug';
import PanelHeading from './PanelHeading';
import ButtonShowMore from './ButtonShowMore';

class PanelDrugs extends Component {

    constructor (props) {
        super(props);
        // this.handleShowMore = this.handleShowMore.bind(this);
        // this.state = {
        //     drugsPerPage: 4
        // }
    }

    // handleShowMore () {
    //     let drugs = this.state.drugsPerPage + 4;
    //     this.setState({
    //         drugsPerPage: drugs
    //     });
    // }

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

                    { (btnShowMore) ? <ButtonShowMore { ...otherProps } /> : null }
                </div>
            </div>
        );
    }
}

export default PanelDrugs;
