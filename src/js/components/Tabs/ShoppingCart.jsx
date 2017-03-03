import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContent.scss';

import PanelDrugs from '../PanelDrugs/PanelDrugs';
import EmptyShoppingCart from '../ShoppingCart/EmptyShoppingCart';
import TotalPrice from '../ShoppingCart/TotalPrice';


const divPaddingTop = {
    paddingTop: 0
}

const ShoppingCart = ({
    addedIds,
    ...otherProps
}) => {

    let emptyPanel = addedIds.length === 0;

    return (
        <div className="container-fluid main-content">
            { (emptyPanel) ?
                <EmptyShoppingCart { ...otherProps } /> : null
            }
            { (!emptyPanel) ?
                <PanelDrugs
                    showOnSale={ false }
                    heading="Basket"
                    whichPanelStyle='basket-tab'
                    { ...otherProps }
                /> : null
            }
            { (!emptyPanel) ?
                <TotalPrice { ...otherProps } /> : null
            }
        </div>
    )
}

ShoppingCart.defaultProps = {
    linksData: {
        linkPath: "/sale",
        linkName: "Sale!",
        linkFilter: "SHOW_ON_SALE"
    }
};

ShoppingCart.PropTypes = {
    addedIds: PropTypes.array.isRequired
};

export default ShoppingCart;
