var axios = require('axios');
var status = require('../config/status.jsx');

var API_KEY = 'd0b1a81066bdc5046c6e9d6758a062c0';
// var API_KEY = 'd0b1a81066bdc5046c6e9d675';
var ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=' + API_KEY;

module.exports = function(city) {

  var url = ROOT_URL + '&q=' + city + ',us';
  var request = axios.get(url);
  return {
    type: status.FETCH_WEATHER,
    payload: request
  };
}
