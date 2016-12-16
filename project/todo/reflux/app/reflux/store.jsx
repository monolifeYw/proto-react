var STATIC_DATA = require('../constant.jsx');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var _listDatas = [];
var isAjax = false;

var Store = Reflux.createStore({
  listenables: [Actions],

  getListDatas: function () {
    return _listDatas;
  },

  load: function (searchKeyword) {
    var self = this;

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
        // console.log('returnDatas', returnDatas);
        _listDatas = returnDatas;
        self.trigger('change', returnDatas);
        // return successCallback(returnDatas);
      }
    });
  }
});

module.exports = Store;
