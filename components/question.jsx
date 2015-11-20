'use strict';

var React = require('react'),
    Radium = require('radium');

var DoughnutChart = require('react-chartjs').Doughnut;

var RadioButton = require('material-ui/lib/radio-button'),
    RadioButtonGroup = require('material-ui/lib/radio-button-group');

var styles = {
    form: {
        maxWidth: '450px',
        padding: '40px',
        margin: '0 auto'
    }
}

var options = {};

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 20,
        color: "#0022F1",
        highlight: "#0022F1",
        label: "Blue"
    }
];

var Component = React.createClass({
    render: function() {
        return (
            <form style={[styles.form]}>
                <h1>WHAT ARE THOSE?</h1>
                <p>I dunno, for reals.</p>
                <RadioButtonGroup name="answer" style={{margin: '40px 0'}}>
                    <RadioButton label="Nike" value="nike" style={{marginBottom: 15}} />
                    <RadioButton label="Rebook" value="rebook" style={{marginBottom: 15}} />
                    <RadioButton label="Google" value="google" style={{marginBottom: 15}} />
                    <RadioButton label="Cardboard" value="cardboard" style={{marginBottom: 15}} />
                </RadioButtonGroup>
                <DoughnutChart data={data} options={options} width="400" height="400" />
            </form>
        );
    }
});

module.exports = Radium(Component);