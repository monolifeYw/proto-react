var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

var List = React.createClass({
    mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function() {
      return {
        ingredients: [],
        newText: ''
      };
    },
    onInputChange: function(evt) {
      this.setState({
        newText: evt.target.value
      })
    },
    componentWillMount: function() {
      console.log('componentWillMount');
      Actions.getIngredients();
    },
    onChange: function(evt, ingredients) {
      console.log('onChange');
      this.setState({
        ingredients: ingredients
      });
    },
    onClick: function(evt) {
      if (this.state.newText) {
        Actions.postIngredient(this.state.newText)
      }

      // window.rd.props.test = "test!!!!! complete";
      console.log('window.rd.props',window.rd.props.onc.prototype.clickfunc);
      // window.rd.props.onc();
      // console.log(window.rd);

      this.setState({newText: ''});
    },
    clickfunc: function() {
      console.log('clickfunc');
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (
          <div>
              <input
                placeholder="add Item"
                value={this.state.newText}
                onChange={this.onInputChange} />
              <button onClick={this.onClick}>Add Item</button>
              {this.props.test}
              <ul>{listItems}</ul>
          </div>

        );
    }
});

module.exports = List;


// 8_simple_server애서
// nodemon server.js 실행하고 이 부분 실행
