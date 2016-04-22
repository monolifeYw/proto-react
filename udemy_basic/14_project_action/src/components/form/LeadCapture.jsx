var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({
  getInitialState: function() {
    return {
      submitted: false
    };
  },

  onChange: function() {
    this.setState({submitted: false});
  },

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

      this.setState({submitted: true});
    }
  },
  render: function() {

    var successStyle = {
      color: 'green',
      visibility: this.state.submitted ? 'visible':'hidden'
    }

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>Get Free E-BOOK</h4>
          </div>
          <div className="panel-body">
            <NameField type="첫번째" ref="fieldName" onChangeFunc={this.onChange} /><br />
            <EmailField ref="fieldEmail" onChangeFunc={this.onChange} />
            <div className="row">
              <div className="col-sm-6">
                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
              </div>
              <div className="col-sm-2">
                <h5 style={successStyle}>Success</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
