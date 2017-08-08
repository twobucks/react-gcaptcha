"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

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
      return _react2.default.createElement("div", {
        className: this.props.clsName,
        id: this.props.elementID
      });
    }
  }]);

  return Recaptcha;
}(_react.Component);

;
Recaptcha.propTypes = {
  sitekey: _propTypes2.default.string,
  elementID: _propTypes2.default.string,
  onloadCallbackName: _propTypes2.default.string,
  onloadCallback: _propTypes2.default.func,
  verifyCallback: _propTypes2.default.func,
  render: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  type: _propTypes2.default.string,
  size: _propTypes2.default.string,
  expiredCallback: _propTypes2.default.func,
  reset: _propTypes2.default.number
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