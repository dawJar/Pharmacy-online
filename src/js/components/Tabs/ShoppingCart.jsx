import React from 'react';

import PanelDrugs from '../PanelDrugs';
import NavLinkContainer from '../../containers/NavLinkContainer';

const ShoppingCart = ({
    countItems,
    totalPrice,
    linksData,
    ...otherProps
}) => {

    let emptyPanel = countItems > 0;

    return (
        <div className="container-fluid">
            <div>
                <h2>
                    { (emptyPanel) ?
                      'Shopping cart:' : 'Your shopping cart is empty.'
                    }
                </h2>
                { (emptyPanel) ?
                    null :
                    <p>
                        Check our
                        <NavLinkContainer data={ linksData } >
                            main page
                        </NavLinkContainer>
                    </p>
                }
            </div>
            { (emptyPanel) ?
              <PanelDrugs
                showOnSale={ false }
                heading="Basket"
                { ...otherProps }/> : null
            }
            {
              (emptyPanel) ?
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
