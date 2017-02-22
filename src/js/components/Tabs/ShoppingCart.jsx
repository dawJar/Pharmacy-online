import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContent.scss';

import PanelDrugs from '../PanelDrugs';
import NavLinkContainer from '../../containers/NavLinkContainer';

const divPaddingTop = {
    paddingTop: 0
}

const ShoppingCart = ({
    addedIds,
    totalPrice,
    linksData,
    ...otherProps
}) => {

    let emptyPanel = addedIds.length === 0;

    return (
        <div className="container-fluid main-content">
            <div>
                { (!emptyPanel) ?
                    null :
                    <div>
                        <h2>Your shopping cart is empty.</h2>
                        Check our
                        <NavLinkContainer data={ linksData } >
                            main page
                        </NavLinkContainer>
                    </div>
                }
            </div>
            { (!emptyPanel) ?
              <PanelDrugs
                showOnSale={ false }
                heading="Basket"
                whichPanelStyle='basket-tab'
                { ...otherProps }/> : null
            }
            {
              (!emptyPanel) ?
              <div>
                <p>total: { totalPrice }</p>
              </div> : null
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
}

export default ShoppingCart;
