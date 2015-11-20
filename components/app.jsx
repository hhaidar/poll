'use strict';

var React = require('react'),
    RouterMixin = require('react-mini-router').RouterMixin,
    Radium = require('radium');

var AppBar = require('material-ui/lib/app-bar'),
    FlatButton = require('material-ui/lib/flat-button'),
    IconButton = require('material-ui/lib/icon-button'),
    FontIcon = require('material-ui/lib/font-icon'),
    LeftNav = require('material-ui/lib/left-nav');

var Questions = require('./questions.jsx'),
    New = require('./new.jsx');

var styles = {
    container: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        flex: '0 1 auto'
    },
    content: {
        flex: '1 1 auto',
        overflowY: 'auto'
    }
}

var Component = React.createClass({

    mixins: [RouterMixin],

    routes: {
        '/': 'index',
        '/questions/new': 'new',
        '/questions/:id': 'question'
    },

    _toggleNav: function(e) {
        e.preventDefault();
        this.refs.leftNav.toggle();
    },

    new: function() {
        return (
            <div style={[ styles.container ]}>
                <header style={[ styles.header ]}>
                    <AppBar title="New Question"
                        iconElementLeft={
                            <IconButton tooltip="Back" linkButton={true} href="/">
                                <FontIcon className="material-icons">arrow_back</FontIcon>
                            </IconButton>
                        }
                        iconElementRight={<FlatButton label="Save" />}
                    />
                </header>
                <section style={[ styles.content ]}>
                    <New />
                </section>
            </div>
        );
    },

    index: function(id) {
        return (
            <div style={[ styles.container ]}>
                <header style={[ styles.header ]}>
                    <AppBar title="Questions"
                        onLeftIconButtonTouchTap={this._toggleNav}
                        iconElementRight={
                            <IconButton tooltip="New" linkButton={true} href="/questions/new">
                                <FontIcon className="material-icons">add</FontIcon>
                            </IconButton>
                        }
                    />
                </header>
                <section style={[ styles.content ]}>
                    <Questions />
                </section>
            </div>
        );
    },

    render: function() {
        var menuItems = [
            {
                text: 'All'
            },
            {
                text: 'Recent'
            }
        ];
        return (
            <div>
                <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
                { this.renderCurrentRoute() }
            </div>
        );
    }

});

module.exports = Radium(Component);
