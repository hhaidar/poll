'use strict';

var React = require('react');

var Radium = require('radium');

var AppBar = require('material-ui/lib/app-bar'),
    Avatar = require('material-ui/lib/avatar'),
    FlatButton = require('material-ui/lib/flat-button'),
    LeftNav = require('material-ui/lib/left-nav'),
    MenuItem = require('material-ui/lib/menus/menu-item'),
    Colors = require('material-ui/lib/styles/colors'),
    List = require('material-ui/lib/lists/list'),
    ListItem = require('material-ui/lib/lists/list-item');

var Component = React.createClass({
    _toggleNav: function(e) {
        e.preventDefault();
        this.refs.leftNav.toggle();
    },
    render: function() {
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
        var menuItems = [
            {  text: 'All' },
            {  text: 'Recent' }
        ];
        return (
            <div style={[ styles.container ]}>
                <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
                <header style={[ styles.header ]}>
                    <AppBar title="Questions"
                        onLeftIconButtonTouchTap={this._toggleNav}
                        iconElementRight={<FlatButton label="New" />}
                    />
                </header>
                <section style={[ styles.content ]}>
                    <List subheader="Recent">
                        {Array.apply(0, Array(30)).map(function (x, i) {
                            return (
                                <ListItem
                                    leftAvatar={<Avatar>Q</Avatar>}
                                    primaryText="Where do you want to eat?"
                                    secondaryText={
                                        <p>
                                            <span style={{color: Colors.darkBlack}}>Potato</span><br/>
                                            Brunch is good.
                                        </p>
                                    }
                                    secondaryTextLines={2} />
                            );
                        })}
                    </List>
                </section>
            </div>
        );
    }
});

module.exports = Radium(Component);
