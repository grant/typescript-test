/// <reference path='../typings/react/react.d.ts' />
var React = require('react');
var HelloMessage = React.createClass({ displayName: "HelloMessage", propTypes: {
    name: React.PropTypes.string.isRequired
}, render: function () {
    return React.createElement("div", null, "Hello ", this.props.name);
} });
React.render(React.createElement(HelloMessage, { name: "Person" }), document.body);
