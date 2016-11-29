var React = require('react');
var AboutOffice = require('./aboutOffice.jsx');
var AboutFamily = require('./aboutFamily.jsx');

var ReactRouter = require('react-router');

var About = React.createClass({

  render: function() {
    console.log('=============================');
    console.log('[about.jsx] this.props : ', this.props);
    var pageId = this.props.params.id;
    var baseContent = (<h1>About</h1>);
    console.log('[about.jsx] pageId : ', pageId);

    if (typeof pageId !== 'undefined') {
      switch(pageId) {
        case 'office':
          Content = AboutOffice;
          break;
        case 'family':
          Content = AboutFamily;
          break;
        default:
          location.href = '/#/about';
      }
    } else {
      // base
      Content = baseContent;
    }

    return (pageId) ? <Content /> : Content;
  }

});

module.exports = About;
