var React = require('react');
var SearchBar = require('../containers/search_bar.jsx');
var WeatherList = require('../containers/weather_list.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }

});

module.exports = App;
