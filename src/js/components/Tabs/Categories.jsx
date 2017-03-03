import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContent.scss';

import CategoriesNav from '../Nav/CategoriesNav';
import PanelDrugs from '../PanelDrugs/PanelDrugs';


const divPaddingRight = {
    paddingRight: 0
}

const Categories = ({
    children,
    ...otherProps
}) => {

    let childrenToRender = React.cloneElement(children, {
                                              btnShowMore: true,
                                              whichPanelStyle: 'categories-tab',
                                              ...otherProps
                                             });

    return (
        <div className="container-fluid main-content">
            <div className="row">
                <div className="col-xs-12 col-sm-2 sidenav-with-categories" style={ divPaddingRight }>

                    <CategoriesNav { ...otherProps } />

                </div>
                <div className="col-xs-12 col-sm-10 panel-items-in-categories">

                    {/* PanelDrugs component */}
                    { childrenToRender }

                </div>
            </div>
        </div>
    );
}

Categories.PropTypes = {
    children: PropTypes.object.isRequired
};

export default Categories;
