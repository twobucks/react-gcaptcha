const React = require("react");
class Recaptcha extends React.Component {
  constructor(props) {
    super(props);
  }
  loadCaptcha() {
    grecaptcha.render(this.props.elementID, {
      "sitekey": this.props.sitekey,
      "callback": this.props.verifyCallback,
      "expired-callback": this.props.expiredCallback,
      "theme": this.props.theme,
      "render": this.props.render,
      "type": this.props.type,
      "size": this.props.size
    });
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
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.reset();
    }
  }
  render() {
    return (
      <div id={this.props.elementID}></div>
    );
  }
};
Recaptcha.propTypes  = {
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
};

Recaptcha.defaultProps = {
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

module.exports = Recaptcha;
