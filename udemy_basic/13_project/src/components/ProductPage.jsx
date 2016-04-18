var React = require('react');
var ProductPage = React.createClass({
  getInitialState: function() {
    return {
      pid: ''
    };
  },
  componentDidMount: function() {
    console.log('this.props.params', this.props.params);
    this.setState({
      pid: this.props.params.productId
    })
  },
  componentWillReceiveProps: function(nextProps) {
    // console.log('nextProps',nextProps);
    this.setState({
      pid: nextProps.params.productId
    })
  },
  render: function() {
    return (
      <h1>Hi!, I'm Product number {this.state.pid}</h1>
    );
  }
});

module.exports = ProductPage;
