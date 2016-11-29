var STATIC_DATA = require('./constant.jsx');
var Dispatcher = require('./dispatcher.jsx');

module.exports = {
  load: function (value) {
    Dispatcher.dispatch({
      actionType: STATIC_DATA.ACTION.LOAD_DATA,
      searchKeyword: value
    });
  }
};
