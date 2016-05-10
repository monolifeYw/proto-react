module.exports = function(state, action) {
  state = state || null;

  console.log('===========reducer_active_book===========');
  console.log('state',state);
  console.log('action',action);
  console.log('===========reducer_active_book end===========');
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
