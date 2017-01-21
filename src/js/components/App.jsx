import React, {Component} from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../sass/style.scss';

import Nav from './Nav.jsx';
import Sale from './Tabs/Sale';
import Categories from './Tabs/Categories';
import Search from './Tabs/Search';
import About from './Tabs/About';
import ShoppingCart from './Tabs/ShoppingCart';

export default class App extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <Nav />
                { children }
            </div>
        );
    }
}
