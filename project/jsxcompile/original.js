var Component1 = React.createClass({
  componentDidMount: function () {
    console.log('[Component1]componentDidMount');
  },

  render: function () {
    return (
      <div style={{width: 200, height: 200, backgroundColor: '#f00', color: '#fff'}}>
        <p>Component1</p>
      </div>
    );
  }
});

var Component2 = React.createClass({
  componentDidMount: function () {
    console.log('[Component2]componentDidMount');
  },

  render: function () {
    return (
      <div style={{width: 200, height: 200, backgroundColor: '#00f', color: '#fff'}}>
        <p>Component2</p>
      </div>
    );
  }
});



var App = React.createClass({
      render: function () {
        return (
          <span>
            <Component1 />
            <Component2 />
          </span>
        );
      }
  });

  ReactDOM.render(
      <App />,
      document.getElementById('react-container')
  );
