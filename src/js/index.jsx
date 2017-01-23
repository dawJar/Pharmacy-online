import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducersApp from './reducers/reducers';

import App from './containers/App';
import Sale from './components/Tabs/Sale';
import Categories from './components/Tabs/Categories';
import Search from './components/Tabs/Search';
import About from './components/Tabs/About';
import ShoppingCart from './components/Tabs/ShoppingCart';


let store = createStore(reducersApp);

const router = (
    <Provider store={ store }>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Sale}/>
                <Route path="/categories" component={Categories}/>
                <Route path="/search" component={Search}/>
                <Route path="/about" component={About}/>
                <Route path="/shopping-cart" component={ShoppingCart}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('content'));
