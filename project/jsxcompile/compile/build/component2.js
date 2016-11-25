var Component2 = React.createClass({displayName: "Component2",
  componentDidMount: function () {
    console.log('[Component2]componentDidMount');
  },

  render: function () {
    return (
      React.createElement("div", {style: {width: 200, height: 200, backgroundColor: '#00f'}}, 
        React.createElement("p", null, "Component2")
      )
    );
  }
});
