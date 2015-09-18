/*global grecaptcha*/
var React = require("react");
var Recaptcha = React.createClass({displayName: "Recaptcha",
  propTypes: {
    sitekey: React.PropTypes.string,
    elementID: React.PropTypes.string,
    onloadCallbackName: React.PropTypes.string,
    onloadCallback: React.PropTypes.func,
    verifyCallback: React.PropTypes.func,
    render: React.PropTypes.string,
    theme: React.PropTypes.string,
    type: React.PropTypes.string,
    size: React.PropTypes.string,
    expiredCallback: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      elementID: "g-recaptcha",
      onloadCallback: undefined,
      onloadCallbackName: "recaptchaLoaded",
      verifyCallback: undefined,
      expiredCallback: undefined,
      render: "explicit",
      theme: "light",
      type: "image",
      size: "normal"
    };
  },
  loadCaptcha: function() {
    grecaptcha.render(this.props.elementID, {
      "sitekey": this.props.sitekey,
      "callback": this.props.verifyCallback,
      "expired-callback": this.props.expiredCallback,
      "theme": this.props.theme,
      "render": this.props.render,
      "type": this.props.type,
      "size": this.props.size
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
