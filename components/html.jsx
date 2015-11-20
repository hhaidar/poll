'use strict';

var React = require('react');

var Radium = require('radium');

var Component = React.createClass({
    render: function() {
        var styles = {
            body: {
                fontFamily: 'Helvetica, Sans-serif',
                fontSize: '15px',
                color: '#777',
                padding: 0,
                margin: 0
            }
        };
        return (
            <html>
                <head>
                    <title>Wat.</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                </head>
                <body style={[ styles.body ]}>
                    <div id="app-mount"
                        dangerouslySetInnerHTML={{ __html: this.props.remount }}>
                    </div>
                    <script id="app-state"
                        dangerouslySetInnerHTML={{ __html: this.props.state }}>
                    </script>
                    <script src="/assets/client.js" />
                </body>
            </html>
        );
    }
});

module.exports = Radium(Component);
