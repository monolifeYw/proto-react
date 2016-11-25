var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./home.jsx');
var About = require('./About.jsx');
var Repos = require('./repos.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>App</header>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/repos">Repos</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }

});

ReactDOM.render(
    <App />,
    document.getElementById('react-container')
);
