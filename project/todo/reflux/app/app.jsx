var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');

var STATIC_DATA = require('./constant.jsx');
var TodoHeader = require('./todoHeader.jsx');
var TodoMain = require('./todoMain.jsx');

var Store = require('./reflux/store.jsx');

console.log('Reflux', Reflux, Store);
var isAjax = false;
var TodoApp = React.createClass({
  mixins: [Reflux.listenTo(Store, '_onChange')],
  getInitialState: function () {
    return {
      listDatas: []
    }
  },

  _onChange: function (evt, datas) {
    console.log('#####[View]getListDatas()', evt, datas, Store.getListDatas());
    this.setState({
      listDatas: Store.getListDatas()
    });
  },

  render: function() {
    return (
      <div>
        <TodoHeader />
        <TodoMain listDatas={this.state.listDatas} />
      </div>
    );
  }
});

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todoContainer')
);
