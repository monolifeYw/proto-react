var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/NavBar.jsx');

var navLinks = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Course',
    href: '#'
  },
  {
    title: 'Blog',
    href: '#'
  }
]

ReactDOM.render(
  <NavBar bgColor="#fff" titleColor="#3097d1" navData={navLinks} />,
  document.getElementById('nav')
);
