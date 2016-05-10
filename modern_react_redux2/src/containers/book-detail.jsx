var React = require('react');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;

var BookDetail = React.createClass({

  render: function() {
    console.log('[BookDetail]', this.props.activeBook);
    var title = (this.props.activeBook && this.props.activeBook.title)?this.props.activeBook.title:'[Choose Books]';
    var pages = (this.props.activeBook && this.props.activeBook.pages)?this.props.activeBook.pages + 'pages':'';
    return (
      <div>
        <h3>Details for : {title}</h3>
        <div>{pages}</div>
      </div>
    );
  }

});

function mapStateToProps(state) {
  console.log('[BookDetail mapStateToProps]',state);
  return {
    activeBook: state.activeBook
  }
}

module.exports = connect(mapStateToProps)(BookDetail);
