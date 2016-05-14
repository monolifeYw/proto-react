var status = require('../config/status.jsx');

module.exports = function(state, action) {
  state = state || [];
  console.log('===============================')
  console.log('Action received [action]: ', action);
  console.log('Action received [state]: ', state);
  switch(action.type) {
    case status.FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      console.log('state!!!!1', ...state);
      console.log('state!!!!2', state);
      return [action.payload.data, ...state];
      // return state.concat([action.payload.data]);
  }

  return state;
}
