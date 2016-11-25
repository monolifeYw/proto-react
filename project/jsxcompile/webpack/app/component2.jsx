var React = require('react');

var Component2 = React.createClass({
  componentDidMount: function () {
    console.log('[Component2]componentDidMount');
  },

  render: function () {
    return (
      <div style={{width: 200, height: 200, backgroundColor: '#00f'}}>
        <p>Component2</p>
      </div>
    );
  }
});

module.exports = Component2;
