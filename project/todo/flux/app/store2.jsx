var STATIC_DATA = require('./constant.jsx');
var Dispatcher = require('./dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _listDatas = [];



var Store2 = assign({}, EventEmitter.prototype, {
  getListDatas: function () {
    return _listDatas;
  },

  addEventListner: function (callback) {
    this.on(STATIC_DATA.STORE_EVENT.CHANGE, callback);
  },

  removeEventListener: function (callback) {
    this.removeListener(STATIC_DATA.STORE_EVENT.CHANGE, callback);
  }
});

Store2.dispatchToken = Dispatcher.register(function (action) {
  // console.log('[Store2][Dispatcher.register]', action);
  // console.log('[Store2][Dispatcher.register]', Store.dispatchToken, Dispatcher, this);

  switch (action.actionType) {
    case STATIC_DATA.ACTION.LOAD_DATA:
      console.log('[Store2][Dispatcher.register]', action);

      var Store = require('./store.jsx');
      // Dispatcher.waitFor([Store.dispatchToken]); // Store 처리후에 진행해라
      // alert('Store2');
      break;

    default:
  }

});

module.exports = Store2;
