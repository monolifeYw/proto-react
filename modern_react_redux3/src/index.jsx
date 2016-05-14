var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var ReduxPromise = require('redux-promise');
//
var App = require('./components/app.jsx');
var Reducer = require('./reducers/index.jsx');
//
var Provider = ReactRedux.Provider;
var createStore = Redux.createStore;
var applyMiddleware = Redux.applyMiddleware;
//
// applyMiddleware 는 createStore()를 받아서
// 호환되는 API를 가진 함수를 반환합니다.
var createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer)} key="provider">
    <App />
  </Provider>
  ,
  document.querySelector('.container')
)
