import React, { Component } from 'react';

import '../../sass/componentStyles/nav.scss';

import NavToggle from './Nav/NavToggle';
import NavLinks from './Nav/NavLinks';
import ShoppingCart from './Nav/ShoppingCart';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <NavToggle />
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ShoppingCart />
                        <NavLinks />
                    </div>
                </div>
            </nav>
        );
    }
}
