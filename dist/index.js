"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

var Recaptcha = function (_React$Component) {
  _inherits(Recaptcha, _React$Component);

  function Recaptcha(props) {
    _classCallCheck(this, Recaptcha);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Recaptcha).call(this, null));
  }

  _createClass(Recaptcha, [{
    key: "loadCaptcha",
    value: function loadCaptcha() {
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
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof grecaptcha !== "undefined") {
        this.loadCaptcha();
      } else {
        window[this.props.onloadCallbackName] = function () {
          this.loadCaptcha();
          if (this.props.onloadCallback) {
            this.props.onloadCallback();
          }
        }.bind(this);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof grecaptcha !== "undefined") {
        grecaptcha.reset();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", { id: this.props.elementID });
    }
  }]);

  return Recaptcha;
}(React.Component);

;
Recaptcha.propTypes = {
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