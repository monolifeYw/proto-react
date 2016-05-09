var React = require('react');
var BookList = require('../containers/book-list.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <BookList />
      </div>
    );
  }

});

module.exports = App;
