import React, { PropTypes, Component } from 'react';

import CategoriesNav from '../CategoriesNav';
import Jumbotron from '../Jumbotron';
import PanelDrugs from '../PanelDrugs';

export default class Categories extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const { children, params, ...otherProps } = this.props;
        const { category } = params;
        const childrenToRender = React.cloneElement(children, { /* key: Date.now(),*/ ...otherProps });

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-2">

                        <CategoriesNav { ...otherProps } />

                    </div>
                    <div className="col-xs-12 col-sm-10">

                        {/* PanelDrugs component */}
                        { (category !== undefined) ?  childrenToRender : null }

                    </div>
                </div>
            </div>
        );
    }

}
