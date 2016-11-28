var React = require('react');
var ReactDOM = require('react-dom');

var STATIC_DATA = require('./constant.jsx');
var TodoHeader = require('./todoHeader.jsx');
var TodoMain = require('./todoMain.jsx');

var isAjax = false;
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      listDatas: []
    }
  },

  search: function (title) {
    var self = this;
    var returnDatas = [];

    if (isAjax) {
      return;
    }

    isAjax = true;

    $.ajax({
      type: 'GET',
      url: STATIC_DATA.API_URL + title,
      dataType: 'json',
      success: function (res) {
        if (res && res.Response && res.Response === 'True') {
          console.log('[res]', res);
          returnDatas = res.Search;
        }

        self.setState({
          listDatas: returnDatas
        });
        isAjax = false;
      }
    });
  },

  render: function() {
    return (
      <div>
        <TodoHeader search={this.search} isAjax={this.state.isAjax} />
        <TodoMain listDatas={this.state.listDatas} />
      </div>
    );
  }
});

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todoContainer')
);
