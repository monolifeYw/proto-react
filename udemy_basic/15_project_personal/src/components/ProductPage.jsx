var React = require('react');

var ProductPage = React.createClass({
  getInitialState: function() {
    return {
      pid: ''
    };
  },
  componentDidMount: function() {
    this.setState({
      pid: this.props.params.productId
    })
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      pid: nextProps.params.productId
    })
  },
  render: function() {

    return (
      <div>
        <h3>{this.state.pid}</h3>
      </div>
    );
  }

});

module.exports = ProductPage;
