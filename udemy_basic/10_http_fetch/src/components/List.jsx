var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');
// var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

var List = React.createClass({
    getInitialState: function() {
      return {
        ingredients: []
      };
    },
    componentWillMount: function() {
      HTTP.get('/ingredients')
          .then(function(data) {
            this.setState({ingredients: data});
          }
          .bind(this));
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;


// 8_simple_server애서
// nodemon server.js 실행하고 이 부분 실행
