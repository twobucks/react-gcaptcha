import React, { Component } from "react";
import PropTypes from "prop-types";

class Recaptcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captcha: {}
    }
  }
  loadCaptcha() {
    const captcha = grecaptcha.render(this.props.elementID, {
      "sitekey": this.props.sitekey,
      "callback": this.props.verifyCallback,
      "expired-callback": this.props.expiredCallback,
      "theme": this.props.theme,
      "render": this.props.render,
      "type": this.props.type,
      "size": this.props.size
    });
    this.setState({ captcha });
  }
  componentDidMount() {
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
  }
  componentWillUnmount() {
    this.resetCaptcha();
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.reset !== nextProps.reset && nextProps.reset){
      this.resetCaptcha();
    }
  }
  resetCaptcha() {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.reset(this.state.captcha);
    }
  }
  render() {
    return (
      <div
        className={this.props.clsName}
        id={this.props.elementID}
      ></div>
    );
  }
};
Recaptcha.propTypes  = {
  sitekey: PropTypes.string,
  elementID: PropTypes.string,
  onloadCallbackName: PropTypes.string,
  onloadCallback: PropTypes.func,
  verifyCallback: PropTypes.func,
  render: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  expiredCallback: PropTypes.func,
  reset: PropTypes.number
};

Recaptcha.defaultProps = {
  elementID: "g-recaptcha",
  onloadCallback: undefined,
  onloadCallbackName: "recaptchaLoaded",
  verifyCallback: undefined,
  expiredCallback: undefined,
  clsName: undefined,
  reset: 0,
  render: "explicit",
  theme: "light",
  type: "image",
  size: "normal"
};

module.exports = Recaptcha;
