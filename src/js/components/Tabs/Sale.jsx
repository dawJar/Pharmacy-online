import React, {Component, PropTypes} from 'react';

import DrugContainer from '../../containers/DrugContainer';
import DrugList from '../DrugList';
import Drug from '../Drug';

export default class Sale extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        Panel heading
                    </div>
                    <div className="panel-body">
                        <DrugContainer drugStyle="sale">
                            <DrugList />
                        </DrugContainer>
                    </div>
                </div>
            </div>
        );
    }
}
