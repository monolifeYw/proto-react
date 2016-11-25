var Component1 = React.createClass({
  componentDidMount: function () {
    console.log('[Component1]componentDidMount');
  },

  render: function () {
    return (
      <div style={{width: 200, height: 200, backgroundColor: '#f00'}}>
        <p>Component1</p>
      </div>
    );
  }
});
