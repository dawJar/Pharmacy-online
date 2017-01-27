// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
// import rootReducer from '../reducers/reducers';
// import { getAllDrugs } from '../actions/actions';
//
// const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }
//
// const store = createStore(
//   rootReducer,
//   applyMiddleware(...middleware)
// )
// store.dispatch(getAllDrugs());
//
// export default store;




//OLD ONE
// const loggerMiddleware = createLogger();
//
// export default function configureStore(preloadedState) {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(
//       thunkMiddleware,
//       loggerMiddleware
//     )
//   )
// }
