var React = require('react');

var VideoListItem = React.createClass({

  render: function() {
    var video = this.props.video;
    var onVideoClick = this.props.onVideoClick;
    var imgUrl = video.snippet.thumbnails.default.url;
    var title = video.snippet.title;
    return (
      <li className="list-group-item" onClick={onVideoClick}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imgUrl} />
          </div>

          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </li>
    );
  }

});

module.exports = VideoListItem;
