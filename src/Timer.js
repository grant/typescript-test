/// <reference path='../typings/react/react.d.ts' />
var React = require('react');
var HelloMessage = React.createClass({ displayName: "HelloMessage", render: function () {
    return React.createElement("div", null, "Hello ", this.props.name);
} });
React.render(React.createElement(HelloMessage, { name: "John" }), document.body);
