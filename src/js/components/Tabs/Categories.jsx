import React, { PropTypes } from 'react';

import CategoriesNav from '../CategoriesNav';
import Jumbotron from '../Jumbotron';
import PanelDrugs from '../PanelDrugs';

const Categories = ({ children, params, ...otherProps }) => {

    let { category } = params;
    let childrenToRender = React.cloneElement(children, {
                                              btnShowMore: true,
                                              ...otherProps
                                             });
    let renderPanelDrugs = category !== undefined;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-2">

                    <CategoriesNav { ...otherProps } />

                </div>
                <div className="col-xs-12 col-sm-10">

                    {/* PanelDrugs component */}
                    { (renderPanelDrugs) ?  childrenToRender : null }

                </div>
            </div>
        </div>
    );
}

export default Categories;
