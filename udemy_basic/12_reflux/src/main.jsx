var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');


var TESTCOM = React.createClass({
  getInitialState: function() {
    return {
      test: "abcde"
    };
  },
  clickfunc: function() {
    console.log('asdsadasdasd');
  },
  render: function() {
    return (
      <List test={this.state.test} onc={this.clickfunc} />
    );
  }

});

ReactDOM.render(<List test="abc" />, document.getElementById('ingredients'));
window.rd = ReactDOM.render(<List onc={List} />, document.getElementById('ingredients2'));
