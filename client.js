var React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./Components.jsx');

var props = window.PROPS;
ReactDOM.render(
  React.createElement(Component, props), document
)
