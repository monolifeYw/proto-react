var React = require('react');
var NavBar = require('./nav/NavBar.jsx');
var LeadCapture = require('./form/LeadCapture.jsx');

var navLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Course',
    href: '/product/1'
  },
  {
    title: 'Blog',
    href: '/product/2'
  }
];

var BasePage = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar bgColor="#fff" titleColor="#3097d1" navData={navLinks} />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {this.props.children}
            </div>
            <div className="col-sm-3">
              <LeadCapture />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
