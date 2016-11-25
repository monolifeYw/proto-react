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
