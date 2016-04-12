var React = require('react');
var Hello = React.createClass({

  render: function() {
    return (
      <div>
        {/* 주석 */}
        <div>{this.props.params.name}</div>
        <div>{this.props.location.query.message}</div>
      </div>
    );
  }

});

module.exports = Hello;
