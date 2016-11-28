var React = require('react');
var STATIC_DATA = require('./constant.jsx');
var mixin = require('./mixin.jsx');

var TodoList = React.createClass({

  // mixin으로 만들자
  /*checkPosterImage: function (imgUrlValue) {
    return (imgUrlValue === 'N/A') ? STATIC_DATA.NOT_FOUND_IMG_URL : imgUrlValue;
  },*/

  mixins: [mixin],

  componentDidMount: function () {
    console.log('componentDidMount');
    $(this.refs.poster).stop();
  },

  componentWillMount: function () {
    console.log('dqwdqwdqweqweqwe');
  },

  componentWillUnmount: function () {
    $(this.refs.poster).stop();
    console.log('[List unmount]', $(this.refs.poster));
  },

  /*shouldComponentUpdate: function () {
    console.log('shouldComponentUpdate');
    return false;
  },*/

  componentDidUpdate: function () {
    console.log('[LifeCycle] componentDidUpdate');
    this.deactive();
  },

  active: function () {
    var $poster = $(this.refs.poster);
    var extendW = STATIC_DATA.POSTER.WIDTH * 0.6;
    var extendH = STATIC_DATA.POSTER.HEIGHT * 0.6;
    var moveMarginW = Math.floor((extendW - STATIC_DATA.POSTER.WIDTH)/2);
    var moveMarginH = Math.floor((extendH - STATIC_DATA.POSTER.HEIGHT)/2);

    $(this.refs.poster).stop().animate({
      width: extendW + 'px',
      height: extendH + 'px',
      marginLeft: -moveMarginW + 'px',
      marginTop: -moveMarginH + 'px'
    }, 200)
  },

  deactive: function (time) {
    var aniTime = time || 0;
    var $poster = $(this.refs.poster);
    $(this.refs.poster).stop().animate({
      width: STATIC_DATA.POSTER.WIDTH + 'px',
      height: STATIC_DATA.POSTER.HEIGHT + 'px',
      marginLeft: 0,
      marginTop: 0
    }, aniTime)
  },

  render: function() {
    // console.log('[TodoList]', this.props.data);
    // console.log('LIST : TODOLIST');
    // this.deactive();
    var posterURL = this.checkPosterImage(this.props.data.Poster);
    return (
      <li>
        <div ref="poster" className="thumb">
          <img
            alt={this.props.data.Title} 
            src={posterURL}
            onMouseEnter={this.active}
            onMouseLeave={this.deactive.bind(null, 5000)}
          />
        </div>
        <div className="info">
          <div className="title">{this.props.data.Title} ({this.props.data.Year})</div>
        </div>
      </li>
    );
  }

});

module.exports = TodoList;
