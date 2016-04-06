var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager headingColor="skyblue" title="Add Words" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager headingColor="orange" title="Todo" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas" />, document.getElementById('christmas'));
