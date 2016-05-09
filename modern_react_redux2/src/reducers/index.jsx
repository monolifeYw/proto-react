var Redux = require('redux');
var booksReducer = require('./reducer_books.jsx');

var rootReducer = Redux.combineReducers({
  books: booksReducer
});

module.exports = rootReducer;
