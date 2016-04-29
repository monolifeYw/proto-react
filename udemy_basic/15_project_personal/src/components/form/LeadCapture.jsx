var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var SubmitStore = require('../../reflux/SubmitStore.jsx');
var Mix = require('../../reflux/MixStore.jsx');
var LoadStore = require('../../reflux/LoadStore.jsx');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({
  mixins:[Reflux.listenTo(SubmitStore, 'onSubmitChange')],
  // mixins:[Reflux.listenTo(LoadStore, 'onLoadChange')],
  // mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return {
      submitted: false
    };
  },

  componentDidMount: function() {

    console.log('componentDidMount', this.listenTo);
    // debugger;
    this.listenTo(LoadStore, this.onLoadChange);
    // Reflux.connect(LoadStore, 'onLoadChange');
  },

  onChange: function() {
    this.setState({submitted: false});
  },

  onSubmitChange: function(param) {
    console.log('onSubmitChange[this]',this);
    console.log('onSubmitChange[param]',param);
    console.log('=============================');
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

      Actions.submitActions();
    }
  },

  onActionTest: function() {
    Actions.load();
  },

  onLoadChange: function(param) {
    console.log('onLoadChange[this]',this);
    console.log('onLoadChange[param]',param);
    console.log('=============================');
  },

  onMixTest: function() {
    Mix.statusUpdate(true);
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
                <button className="btn" onClick={this.onActionTest}>ActionTest</button>
                <button className="btn btn-primary" onClick={this.onMixTest}>MixTest</button>
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
