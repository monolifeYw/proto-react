var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var SubmitStore = Reflux.createStore({
  // listenables: [Actions],
  init: function() {
    console.log('[SubmitStore initialize]');

    this.listenTo(Actions.submitActions, this.onSubmitActions);
  },

  onSubmitActions: function() {
    console.log('[Store] onSubmitActions');
    var msg = "summited";
    this.trigger(msg);
  }
})

module.exports = SubmitStore;
