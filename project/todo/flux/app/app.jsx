var React = require('react');
var ReactDOM = require('react-dom');

var STATIC_DATA = require('./constant.jsx');
var TodoHeader = require('./todoHeader.jsx');
var TodoMain = require('./todoMain.jsx');

var Store = require('./store.jsx');
var Store2 = require('./store2.jsx');

var isAjax = false;
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      listDatas: Store.getListDatas()
    }
  },

  componentDidMount: function () {
    Store.addEventListner(this._onChange);
  },

  componentWillUnmount: function () {
    Store.removeEventListner(this._onChange);
  },

  _onChange: function () {
    console.log('[View]Store.getListDatas()', Store.getListDatas());
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
