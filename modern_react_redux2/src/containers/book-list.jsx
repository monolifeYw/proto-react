var React = require('react');
var ReactRedux = require('react-redux');

var BookList = React.createClass({
  renderList: function() {
    console.log(this.props);
    return this.props.books.map(function(book) {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    })
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

// var AAA = React.createClass({
//
//   render: function() {
//     return (
//       <div />
//     );
//   }
//
// });


function mapStateToProps(state) {
  return {
    books: state.books
  }
}
// console.log('connect',connect.connect);
// module.exports = connect(mapStateToProps)(BookList);

module.exports = ReactRedux.connect(mapStateToProps)(BookList);
