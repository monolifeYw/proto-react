var React = require('react');
var ReactDOM = require('react-dom');
var YTSearch = require('youtube-api-search');
var _ = require('lodash');

// include components
var SearchBar = require('./components/search_bar.jsx');
var VideoList = require('./components/video_list.jsx');
var VideoDetail = require('./components/video_detail.jsx');

var API_KEY = 'AIzaSyCyKnKtqdUtkI1Fc8bPgeJFaRBKM3u5VUA';

var APP = React.createClass({
  getInitialState: function() {
    return {
      videos: [],
      selectedVideo: null
    };
  },
  componentWillMount: function() {
    this.videoSearch('sexy');
  },

  onVideoSelect: function(selectedVideo) {
    console.log('selectedVideo',selectedVideo);
    var nowState = this.state;
    nowState.selectedVideo = selectedVideo;
    this.setState(nowState);
  },


  videoSearch: function(term) {
    console.log('videoSearch', term);
    YTSearch({
      key: API_KEY,
      term: term
    }, function(datas) {
      this.setState({
        videos: datas,
        selectedVideo: datas[0]
      });
    }.bind(this));
  },

  render: function() {

    var videoSearchDebounce = _.debounce(function(term){
      this.videoSearch(term);
    }.bind(this), 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearchDebounce} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
});

ReactDOM.render(
  <APP />,
  document.querySelector('.container')
);

module.exports = APP;
