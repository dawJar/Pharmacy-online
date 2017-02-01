import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from '../store/configureStore';

import AppContainer from './AppContainer';
import Sale from '../components/Tabs/Sale';
import Categories from '../components/Tabs/Categories';
import PanelDrugs from '../components/PanelDrugs';
import Search from '../components/Tabs/Search';
import About from '../components/Tabs/About';
import ShoppingCart from '../components/Tabs/ShoppingCart';


const RootContainer = () => (
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ AppContainer }>
                <IndexRoute component={ Sale }/>
                <Route path="/sale" component={ Sale }/>
                <Route path="/categories" component={ Categories }>
                    <IndexRoute component={ PanelDrugs }/>
                    <Route path="/categories/:category" component={ PanelDrugs }/>
                </Route>
                <Route path="/search" component={ Search }/>
                <Route path="/about" component={ About }/>
                <Route path="/shopping-cart" component={ ShoppingCart }/>
            </Route>
        </Router>
    </Provider>
);

export default RootContainer;
