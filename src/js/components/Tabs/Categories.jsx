import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContent.scss';

import CategoriesNav from '../CategoriesNav';
import PanelDrugs from '../PanelDrugs';

const divPaddingRight = {
    paddingRight: 0
}

const Categories = ({ children, params, ...otherProps }) => {

    let { category } = params;
    let childrenToRender = React.cloneElement(children, {
                                              btnShowMore: true,
                                              whichPanelStyle: 'categories-tab',
                                              ...otherProps
                                             });
    // let renderPanelDrugs = category !== undefined;

    return (
        <div className="container-fluid main-content">
            <div className="row">
                <div className="col-xs-12 col-sm-2 sidenav-with-categories" style={ divPaddingRight }>

                    <CategoriesNav { ...otherProps } />

                </div>
                <div className="col-xs-12 col-sm-10 panel-items-in-categories">

                    {/* PanelDrugs component */}
                    {/* { (renderPanelDrugs) ?  childrenToRender : null } */}
                    { childrenToRender }

                </div>
            </div>
        </div>
    );
}

export default Categories;
