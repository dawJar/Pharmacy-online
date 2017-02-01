import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
// import { createStore } from 'redux';

// import rootReducer from '../reducers/reducers';
// import store from '../store/configureStore';
import {getAllDrugs} from '../actions/actions';

import App from './App';
import Sale from '../components/Tabs/Sale';
import Categories from '../components/Tabs/Categories';
import PanelDrugs from '../components/PanelDrugs';
import Search from '../components/Tabs/Search';
import About from '../components/Tabs/About';
import ShoppingCart from '../components/Tabs/ShoppingCart';

import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers/reducers'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware))

store.dispatch(getAllDrugs())

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Sale}/>
                        <Route path="/sale" component={Sale}/>
                        <Route path="/categories" component={Categories}>
                            <IndexRoute component={PanelDrugs}/>
                            <Route path="/categories/:category" component={PanelDrugs}/>
                        </Route>
                        <Route path="/search" component={Search}/>
                        <Route path="/about" component={About}/>
                        <Route path="/shopping-cart" component={ShoppingCart}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}
