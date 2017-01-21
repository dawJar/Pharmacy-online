import React, {Component} from 'react';

import ShoppingCart from './ShoppingCart';

export default class NavLinks extends Component {

    getMonth() {
        const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const whichMonth = months[Date.getMonth()];

        return whichMonth;
    }

    render() {
        return (
            <div className="collapse navbar-collapse" id="myNavbar">
                <ShoppingCart />
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">{ this.getMonth } sale!</a>
                    </li>
                    <li>
                        <a href="#">Categories</a>
                    </li>
                    <li>
                        <a href="#">Search</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        );
    }
}
