var Reflux = require('reflux');

// var Actions = Reflux.createActions([
//   'submitActions'
// ]);


var Actions = Reflux.createActions({
  submitActions:{},
  load: {
    children: ['completed', 'failed']
  }
});

Actions.submitActions.listen(function() {
  console.log('submitActions listen', this);
});

Actions.load.listen(function() {
  console.log('load listen');
  this.completed('액션에서 처리');
});

module.exports = Actions;
