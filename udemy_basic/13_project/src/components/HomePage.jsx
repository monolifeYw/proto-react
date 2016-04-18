var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HomePage = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to='/product/10'>IOS Course</Link></li>
          <li><Link to='/product/22'>React Course</Link></li>
        </ul>
      </div>
    );
  }

});

module.exports = HomePage;
