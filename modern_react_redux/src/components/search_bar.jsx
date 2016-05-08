var React = require('react');
/*
  SearchBar extends Components(<SearchBar />)
 */

var SearchBar = React.createClass({
  getInitialState: function() {
    console.log('[getInitialState]', this.props);
    return {
      term: ''
    };
  },
  onInputChange: function(evt) {
    // console.log('onInputChange', evt);
    var term = evt.target.value;

    this.setState({
      term: term
    });

    this.props.onSearchTermChange(term);
  },

  render: function() {
    return (
      <div className="search-bar">
        <input
          onChange={this.onInputChange}
          value={this.state.term}
        />
        <p>Value of the input : {this.state.term}</p>
      </div>
    );
  }

});

module.exports = SearchBar;
