var React = require('react');
var VideoListItem = require('./video_list_item.jsx');

var VideoList = React.createClass({
  render: function() {
    var videos = this.props.videos;
    var videoItems = videos.map(function(data, idx) {
      return (<VideoListItem
              onVideoClick={this.props.onVideoSelect.bind(null, data)}
              key={data.etag}
              video={data}
            />);
    }.bind(this));

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }

});

module.exports = VideoList;
