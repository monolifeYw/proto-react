// sudo npm install reflux --save

var Reflux = require('reflux');
var Actions = Reflux.createActions([
  'getIngredients',
  'postIngredient'
]);

module.exports = Actions;
