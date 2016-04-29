var Reflux = require('reflux');

//actions
// var MixActions = Reflux.createActions(
//   ['textUpdate', 'statusUpdate']
// )

var textUpdate = Reflux.createAction();
var statusUpdate = Reflux.createAction();


var textStore = Reflux.createStore({
  init: function() {
    console.log('[textStore]');
    this.listenTo(textUpdate, this.output);
  },

  output: function() {
    this.trigger(arguments[0]);
  }
});

var statusStore = Reflux.createStore({
  init: function() {
    console.log('[statusStore]');
    this.listenTo(statusUpdate, this.output);
  },

  output: function(flag) {
    var status = (flag)?'ONLINE':'OFFLINE';
    this.trigger(status);
  }
});

// class 역할
var MixStore = Reflux.createStore({
  init: function() {
    console.log('[MixStore]');
    this.listenTo(textStore, this.textChanged);
    this.listenTo(statusStore, this.statusChanged);
    this.storeArr = [];
  },

  statusChanged: function(flag) {
    console.log('[MixStore statusChanged]');
    if (flag == 'OFFLINE') {
      // 초기화
      this.trigger('Once upon a time the user did the following: ' + this.storeArr.join(', '));
      this.storeArr.splice(0, this.storeArr.length);
    }
  },

  textChanged: function(text) {
    this.storeArr.push(text);
  }
});

function ConsoleComponent() {
  textStore.listen(function(text) {
    console.log('textStore listen : ', text);
  });

  statusStore.listen(function(text) {
    console.log('statusStore listen : ', text);
  });

  MixStore.listen(function(text) {
    console.log('MixStore listen : ', text);
  });
}

var component = new ConsoleComponent();

// statusUpdate(true);
// textUpdate('1');
// textUpdate('2');
// textUpdate('3');
// textUpdate('4');
// statusUpdate(false);

module.exports = {
  statusUpdate: statusUpdate,
  textUpdate: textUpdate
};
