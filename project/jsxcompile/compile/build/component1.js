var Component1 = React.createClass({displayName: "Component1",
  componentDidMount: function () {
    console.log('[Component1]componentDidMount');
  },

  render: function () {
    return (
      React.createElement("div", {style: {width: 200, height: 200, backgroundColor: '#f00'}}, 
        React.createElement("p", null, "Component1")
      )
    );
  }
});
