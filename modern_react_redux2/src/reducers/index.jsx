var Redux = require('redux');
var booksReducer = require('./reducer_books.jsx');
var activeBookReducer = require('./reducer_active_book.jsx');

var rootReducer = Redux.combineReducers({
  books: booksReducer,
  activeBook: activeBookReducer
});

var store = Redux.createStore(rootReducer);

// http://stackoverflow.com/questions/33749759/read-stores-initial-state-in-redux-reducer
// 기본 Store 구성
function counter(state, action) {
  console.log('[counter]', state, action)
  state = state || 0;
  return state;
}
var test_store;
test_store = Redux.createStore(counter);
console.log('[Test_Store].1', test_store.getState()); // 0

test_store = Redux.createStore(counter, 10);
console.log('[Test_Store].2', test_store.getState()); // 10

function a(state, action) {
  state = state || 'lol';
  return state;
}

function b(state, action) {
  state = state || 'wat';
  return state;
}

var combined;
combined = Redux.combineReducers({a:a, b:b, c:counter});
console.log('[combined]', combined); // function

test_store = Redux.createStore(combined);
console.log('[Test_Store].3', test_store.getState()); // Object {a: "lol", b: "wat", c: 0}




module.exports = store;
