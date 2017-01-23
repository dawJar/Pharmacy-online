import React, {Component} from 'react';

import '../../sass/componentStyles/nav.scss';

import NavToggle from './Nav/NavToggle';
import NavLinks from './Nav/NavLinks';

export default class Nav extends Component {
    constructor (props) {
      super(props);
    }

    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <NavToggle/>
                    <NavLinks {...this.props} />
                </div>
            </nav>
        );
    }
}

Nav.defaultProps = {
    temporary: [{
        index: 0,
        linkPath: "/",
        linkName: "Sale!"
    },
    {
        index: 1,
        linkPath: "/categories",
        linkName: "Categories"
    },
    {
        index: 2,
        linkPath: "/search",
        linkName: "Search"
    },
    {
        index: 3,
        linkPath: "/about",
        linkName: "About"
    }],
    shoppingCart: {
        index: 4,
        linkPath: "/shopping-cart",
        linkName: "ShoppingCart"
    },
}
