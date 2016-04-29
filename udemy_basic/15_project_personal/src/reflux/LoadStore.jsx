var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var LoadStore = Reflux.createStore({
  // listenables: [Actions],
  init: function() {
    this.listenTo(Actions.load, this.onLoad);
    this.listenTo(Actions.load.completed, this.onLoadCompleted);
    this.listenTo(Actions.load.failed, this.onLoadFailed);
    // this.listenToMany
    console.log('[LoadStore initialize]')
  },

  onLoad: function() {
    console.log('[LoadStore]onLoad');
    this.trigger('[onLoad]load trigger');
  },

  onLoadCompleted: function(res) {
    console.log('[LoadStore]onLoadCompleted', res);
    this.trigger('[onLoadCompleted][LoadStore에서 Trigger]'+res);
  },

  onLoadFailed: function() {
    console.log('[LoadStore]onLoadFailed');
  }
});

module.exports = LoadStore;
