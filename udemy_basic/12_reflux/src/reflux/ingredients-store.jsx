var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');


var IngredientStore = Reflux.createStore({
  listenables: [Actions],


  // action in Actions
  getIngredients: function() {
    console.log('store-getIngredients')
    HTTP.get('/ingredients')
        .then(function(json) {
          this.ingredients = json;
          this.fireUpdate();
        }
        .bind(this));
  },
  // action in Actions
  postIngredient: function(txt) {
    var ingredient = {
      'text': txt,
      'id': Math.floor(Date.now() / 1000) + txt
    }
    console.log(this.ingredients);
    if (!this.ingredients) {
      this.ingredients = [];
    }

    this.ingredients.push(ingredient);
    // this.ingredient = ingredient;
    this.fireUpdate();
  },

  // refresh function
  fireUpdate: function() {
    console.log('store-fireUpdate', this);
    this.trigger('change', this.ingredients);
  }

});

module.exports = IngredientStore;


// var TodoStore = Reflux.createStore({
//
// });
//
// module.exports = {
//   Ing: IngredientStore,
//   Todo: TodoStore
// }
