'use strict';

var React = require('react');

var RadioButton = require('material-ui/lib/radio-button'),
    RadioButtonGroup = require('material-ui/lib/radio-button-group');

var Component = React.createClass({
    render: function() {
        return (
            <div>
                <p>Where should we eat?</p>
                <RadioButtonGroup name="answer">
                    <RadioButton
                        value="light"
                        label="The 5th" />
                    <RadioButton
                        value="not_light"
                        label="Firkin" />
                    <RadioButton
                        value="ludicrous"
                        label="Figo" />
                </RadioButtonGroup>
            </div>
        );
    }
});

module.exports = Component;
