"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recaptcha = function (_Component) {
  _inherits(Recaptcha, _Component);

  function Recaptcha(props) {
    _classCallCheck(this, Recaptcha);

    var _this = _possibleConstructorReturn(this, (Recaptcha.__proto__ || Object.getPrototypeOf(Recaptcha)).call(this, props));

    _this.state = {
      captcha: {}
    };
    return _this;
  }

  _createClass(Recaptcha, [{
    key: "loadCaptcha",
    value: function loadCaptcha() {
      var captcha = grecaptcha.render(this.props.elementID, {
        "sitekey": this.props.sitekey,
        "callback": this.props.verifyCallback,
        "expired-callback": this.props.expiredCallback,
        "theme": this.props.theme,
        "render": this.props.render,
        "type": this.props.type,
        "size": this.props.size
      });
      this.setState({ captcha: captcha });
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
      this.resetCaptcha();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.reset !== nextProps.reset && nextProps.reset) {
        this.resetCaptcha();
      }
    }
  }, {
    key: "resetCaptcha",
    value: function resetCaptcha() {
      if (typeof grecaptcha !== "undefined") {
        grecaptcha.reset(this.state.captcha);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { id: this.props.elementID });
    }
  }]);

  return Recaptcha;
}(_react.Component);

;
Recaptcha.propTypes = {
  sitekey: _react.PropTypes.string,
  elementID: _react.PropTypes.string,
  onloadCallbackName: _react.PropTypes.string,
  onloadCallback: _react.PropTypes.func,
  verifyCallback: _react.PropTypes.func,
  render: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  type: _react.PropTypes.string,
  size: _react.PropTypes.string,
  expiredCallback: _react.PropTypes.func,
  reset: _react.PropTypes.bool
};

Recaptcha.defaultProps = {
  elementID: "g-recaptcha",
  onloadCallback: undefined,
  onloadCallbackName: "recaptchaLoaded",
  verifyCallback: undefined,
  expiredCallback: undefined,
  reset: undefined,
  render: "explicit",
  theme: "light",
  type: "image",
  size: "normal"
};

module.exports = Recaptcha;