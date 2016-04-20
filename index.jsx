var React = require('react');
var ReactDOM = require('react-dom');
var MyBlogController = require('./components/MyBlogController');

ReactDOM.render(
  <MyBlogController/>,
  document.querySelector('#example')
);