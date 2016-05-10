module.exports = function(book) {
  // ActionCreator
  // return an action
  console.log('a book has been selected : ', book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
