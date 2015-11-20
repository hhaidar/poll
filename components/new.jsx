'use strict';

var React = require('react'),
    Radium = require('radium');

var TextField = require('material-ui/lib/text-field'),
    RadioButton = require('material-ui/lib/radio-button'),
    RadioButtonGroup = require('material-ui/lib/radio-button-group');

var styles = {
    form: {
        padding: '40px'
    },
    input: {
        width: '100%',
        display: 'block'
    }
}

var Component = React.createClass({
    render: function() {
        return (
            <form style={[styles.form]}>
                <TextField hintText="Title" style={styles.input} autoFocus={true} />
                <TextField hintText="Description &mdash; Optional" style={styles.input} multiLine={true} rows={3} />
                <RadioButtonGroup name="shipSpeed" defaultSelected="binary" style={{marginTop: 40}}>
                    <RadioButton label="Yes or No" value="binary" style={{marginBottom: 15}} />
                    <RadioButton label="Single Choice" value="single" style={{marginBottom: 15}} />
                    <RadioButton label="Multiple Choice" value="multiple" style={{marginBottom: 15}} />
                </RadioButtonGroup>
            </form>
        );
    }
});

module.exports = Radium(Component);