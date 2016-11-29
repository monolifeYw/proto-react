var STATIC_DATA = require('./constant.jsx');
var Dispatcher = require('./dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _listDatas = [];
var isAjax = false;

function getListConnect(searchKeyword, successCallback) {
  if (isAjax) {
    return;
  }

  isAjax = true;

  $.ajax({
    type: 'GET',
    url: STATIC_DATA.API_URL + searchKeyword,
    dataType: 'json',
    success: function (res) {
      isAjax = false;
      var returnDatas = (res && res.Response && res.Response === 'True') ? res.Search : [];
      return successCallback(returnDatas);
    }
  });
}

var Store = assign({}, EventEmitter.prototype, {
  getListDatas: function () {
    return _listDatas;
  },

  getListRefresh: function (listDatas) {
    console.log('[Store][getListRefresh]', listDatas, this);
    _listDatas = listDatas;
    this.viewDispatch();
  },

  viewDispatch: function () {
    this.emit(STATIC_DATA.STORE_EVENT.CHANGE);
  },

  addEventListner: function (callback) {
    this.on(STATIC_DATA.STORE_EVENT.CHANGE, callback);
  },

  removeEventListener: function (callback) {
    this.removeListener(STATIC_DATA.STORE_EVENT.CHANGE, callback);
  }
});

Store.dispatchToken = Dispatcher.register(function (action) {
  switch (action.actionType) {
    case STATIC_DATA.ACTION.LOAD_DATA:
      console.log('[Store][Dispatcher.register]', action);

      var Store2 = require('./store2.jsx');
      // Dispatcher.waitFor([Store2.dispatchToken]); // store2 에서 처리 후에 진행해라
      // alert('Store1');

      getListConnect(action.searchKeyword, Store.getListRefresh.bind(Store));
      break;

    default:
  }
});

module.exports = Store;
