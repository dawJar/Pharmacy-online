import React, { PropTypes, Component } from 'react';

import CategoriesNav from '../CategoriesNav';
import Jumbotron from '../Jumbotron';
import PanelDrugs from '../PanelDrugs';

export default class Categories extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const { children, params, ...restProps } = this.props;
        const { category } = params;
        const childrenToRender = React.cloneElement(children, {
            key: Date.now(),
            showOnSale: false,
            btnShowMore: true,
            ...restProps
        });
        // console.log(this.props);

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-2">

                        <CategoriesNav { ...restProps } />

                    </div>
                    <div className="col-xs-12 col-sm-10">

                        {/* <PanelDrugs showOnSale={ false } btnShowMore={ true } heading="All" /> */}

                        { (category !== undefined) ?  childrenToRender : null }

                    </div>
                </div>
            </div>
        );
    }

}
