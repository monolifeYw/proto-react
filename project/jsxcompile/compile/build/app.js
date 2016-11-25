var App = React.createClass({displayName: "App",
      render: function () {
        return (
          React.createElement("div", null, 
            React.createElement(Component1, null), 
            React.createElement(Component2, null)
          )
        );
      }
  });


  ReactDOM.render(
      React.createElement(App, null),
      document.getElementById('react-container')
  );
