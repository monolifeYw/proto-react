var React = require('react');
var ReactDOM = require('react-dom');
var Component1 = require('./component1.jsx');
var Component2 = require('./component2.jsx');
// console.log('Component1', Component1);
//

var App = React.createClass({
      render: function () {
        return (
          <div>
            <Component1 />
            <Component2 />
          </div>
        );
      }
  });

  ReactDOM.render(
      <App />,
      document.getElementById('react-container')
  );
