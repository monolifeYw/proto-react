var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var action = require('../actions/index.jsx');
var connect = ReactRedux.connect;
var bindActionCreators = Redux.bindActionCreators;


var SearchBar = React.createClass({
  getInitialState: function() {
    return {
      term: ''
    };
  },
  onInputChange: function(evt) {
    this.setState({term: evt.target.value});
  },
  onFormSubmit: function(evt) {
    this.props.selectCity(this.state.term);
    this.setState({term: ''});
    evt.preventDefault();
  },
  render: function() {
    // console.log('[search_bar] return_datas Props : ', this.props.return_datas);
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          placeholder="Get a forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCity: action
  }, dispatch)
}

module.exports = connect(null, mapDispatchToProps)(SearchBar);
