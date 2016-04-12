var React = require('react');
var PropTypes = React.PropTypes;

var NameField = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },

  onChange: function(evt) {
    this.setState({value: evt.target.value});
  },

  clear: function() {
    this.setState({value: ''});
  },

  render: function() {
    return (
      <input
        className="form-control"
        placeholder={this.props.type + "name"}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }

});

module.exports = NameField;
