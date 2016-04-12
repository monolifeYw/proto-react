var React = require('react');
var Button = require('./Button.jsx');

var Base = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Header</h1>
        {this.props.children}
        <h1>Footer</h1>
        {Button}
      </div>
    );
  }
});

module.exports = Base;
