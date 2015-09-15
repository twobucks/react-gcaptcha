"use strict";
const React = require("react");

const Recaptcha = React.createClass({displayName: "Recaptcha",
  propTypes: {
    className: React.PropTypes.string,
    onloadCallbackName: React.PropTypes.string,
    elementID: React.PropTypes.string,
    onloadCallback: React.PropTypes.func,
    verifyCallback: React.PropTypes.func,
    render: React.PropTypes.string,
    sitekey: React.PropTypes.string,
    theme: React.PropTypes.string,
    type: React.PropTypes.string,
    verifyCallbackName: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      elementID: "g-recaptcha",
      onloadCallback: undefined,
      onloadCallbackName: "onloadCallback",
      verifyCallbackName: "verifyCallback",
      verifyCallback: undefined,
      render: "onload",
      theme: "light",
      type: "image"
    };
  },
  loadCaptcha: function() {
    grecaptcha.render(this.props.elementID, {
      "sitekey": this.props.sitekey,
      "callback": this.props.verifyCallback,
      "theme": this.props.theme,
      "type": this.props.type
    });
  },
  componentDidMount: function() {
    if (typeof grecaptcha !== "undefined") {
      this.loadCaptcha();
    } else {
      window[this.props.onloadCallbackName] = function() {
        this.loadCaptcha();
        if (this.props.onloadCallback) {
          this.props.onloadCallback();
        }
      }.bind(this);
    }
  },
  componentWillUnmount: function() {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.reset();
    }
  },
  render: function() {
    return (
      React.createElement("div", {id: this.props.elementID})
    );
  }
});

module.exports = Recaptcha;
