var React = require('react');
var ReactDOM = require('react-dom');
var MessageBox = require('./MessageBox');

ReactDOM.render(
    <MessageBox />,
    document.getElementById('container'),
    function () {
        console.log('after render');
    }
)
