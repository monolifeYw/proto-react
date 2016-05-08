var React = require('react');

var VideoDetail = React.createClass({

  render: function() {
    var video = this.props.video;
    if (!video) {
      return (
        <div>Loading...</div>
      )
    }
    var title = video.snippet.title;
    var description = video.snippet.description;
    var videoId = video.id.videoId;
    var url = 'https://www.youtube.com/embed/' + videoId;
    
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>
    );
  }

});

module.exports = VideoDetail;
