var React = require('react');
var BookList = require('../containers/book-list.jsx');
var BookDetail = require('../containers/book-detail.jsx');

var Provider = require('react-redux').Provider;
var Store = require('../reducers/index.jsx');

var App = React.createClass({

  render: function() {
    return (
      <Provider store={Store} key="provider">
        <div>
          <BookList />
          <BookDetail />
        </div>
      </Provider>
    );
  }

});

module.exports = App;
