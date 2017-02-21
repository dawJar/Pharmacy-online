import { getAllDrugs } from '../actions/actions';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducers';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)

store.dispatch(getAllDrugs())

export default store;
