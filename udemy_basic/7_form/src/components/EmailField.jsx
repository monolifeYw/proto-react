var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function() {
    return {
      valid: true,
      value: ''
    };
  },
  onChange: function(evt) {
    var value = evt.target.value;
    var valid = validator.validate(value);

    // if (!validator.validate(value)) {
    //   valid = false;
    // } else {
    //   valid = true;
    // }

    console.log('onChange : ', evt);
    this.setState({
      valid: valid,
      value: value
    });
  },
  clear: function() {
    this.setState({
      valid: true,
      value: ''
    })
  },
  render: function() {
    var formClass = this.state.valid ? 'form-group' : 'form-group has-error';
    return (
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value} />
      </div>
    );
  }

});

module.exports = EmailField;
