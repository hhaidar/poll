'use strict';

var injectTapEventPlugin = require("react-tap-event-plugin");

var React = require('react'),
    ReactDOM = require('react-dom');

var App = React.createFactory(require('./app.jsx'));

injectTapEventPlugin();

ReactDOM.render(App(window.state), document.getElementById('app-mount'));