var Redux = require('redux');
var WeatherReducer = require('./reducer_weather.jsx');

var rootReducer = Redux.combineReducers({
  datas: WeatherReducer
});

// var store = Redux.createStore(rootReducer);

module.exports = rootReducer;
