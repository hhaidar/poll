'use strict';

var React = require('react');

var Avatar = require('material-ui/lib/avatar'),
    Colors = require('material-ui/lib/styles/colors'),
    List = require('material-ui/lib/lists/list'),
    ListItem = require('material-ui/lib/lists/list-item');

module.exports = React.createClass({
    render: function() {
        return (
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
        );
    }
});