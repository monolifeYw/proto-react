var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to="/product/1">Product 1 Page</Link></li>
          <li><Link to="/product/2">Product 2 Page</Link></li>
        </ul>
      </div>
    );
  }

});

module.exports = HomePage;
