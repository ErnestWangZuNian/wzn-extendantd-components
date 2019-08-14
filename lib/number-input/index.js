"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _antd = antd,
    Input = _antd.Input;

var NumberInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(NumberInput, _React$Component);

  // static defaultProps = {};
  // static propTypes = {};
  function NumberInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, NumberInput);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NumberInput).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(NumberInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Input, {
        placeholder: "number-input"
      });
    }
  }]);
  return NumberInput;
}(React.Component);

var _default = NumberInput;
exports["default"] = _default;