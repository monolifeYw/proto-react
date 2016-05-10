var React = require('react');

var Redux = require('redux');
var bindActionCreators = Redux.bindActionCreators;

var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;

var action = require('../actions/index.jsx');

var BookList = React.createClass({
  renderList: function() {
    return this.props.books.map(function(book) {
      return (
        <li key={book.title} className="list-group-item" onClick={this.props.selectBook.bind(null, book)}>{book.title}</li>
      );
    }.bind(this))
  },
  render: function() {
    console.log('render',this.props);
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

});

function mapStateToProps(state) {
  console.log('[mapStateToProps]', state);
  return {
    books: state.books
  }
}
// console.log('connect',connect.connect);
// module.exports = connect(mapStateToProps)(BookList);

function mapDispatchToProps(dispatch) {
  console.log('[mapDispatchToProps]', dispatch);
// whenever(~할때마다) selectBook is called, the result should be passed
  return bindActionCreators({
    selectBook: action
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(BookList);
