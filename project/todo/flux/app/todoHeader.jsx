var React = require('react');
var STATIC_DATA = require('./constant.jsx');

var Actions = require('./actions.jsx');
var TodoHeader = React.createClass({

  // 검색
  searchTitle: function () {
    var value = this.refs.searchInp.value;
    if (typeof value !== 'undefined' && value !== '') {
      this.refs.searchInp.value = '';
      // this.props.search(value);
      Actions.load(value);
      this.refs.searchInp.blur();
    }
  },

  keyDown: function (evt) {
    if (evt.keyCode === STATIC_DATA.KEY.ENTER) {
      this.searchTitle();
    }
  },

  render: function() {
    return (
      <section className="todo-header">
        <h1 className="title">Todo-js</h1>
        <div className="search-area">
          <input type="text" className="input-search" placeholder="Find the movie title" ref="searchInp" onKeyDown={this.keyDown} />
          <button type="button" className="btn-search" onClick={this.searchTitle}>검색</button>
        </div>
      </section>
    );
  }
});

module.exports = TodoHeader;
