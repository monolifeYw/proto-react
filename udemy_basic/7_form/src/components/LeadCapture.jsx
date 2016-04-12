var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(evt) {
    if (!this.refs.fieldEmail.state.valid) {
      alert('You suck at filling out forms. Email Error');
    } else {
      // send request to email host or server
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value
      };

      this.refs.fieldEmail.clear();
      this.refs.fieldName.clear();
    }
  },
  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="첫번째" ref="fieldName" />
            <EmailField ref="fieldEmail" />
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
