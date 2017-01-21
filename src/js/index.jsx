import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Sale from './components/Tabs/Sale';
import Categories from './components/Tabs/Categories';
import Search from './components/Tabs/Search';
import About from './components/Tabs/About';
import ShoppingCart from './components/Tabs/ShoppingCart';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Sale}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/search" component={Search}/>
            <Route path="/about" component={About}/>
            <Route path="/shopping-cart" component={ShoppingCart}/>
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('content'));
