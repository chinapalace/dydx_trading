webpackHotUpdate(4,{

/***/ "./components/BaseToken.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dummyData_js__ = __webpack_require__("./dummyData.js");
var _jsxFileName = "/Users/justinmclaren/Desktop/dydx/client/components/BaseToken.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BaseToken =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseToken, _Component);

  function BaseToken() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, BaseToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = BaseToken.__proto__ || Object.getPrototypeOf(BaseToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(_assertThisInitialized(_this), "resetComponent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          isLoading: false,
          results: [],
          value: ""
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleResultSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref2) {
        var result = _ref2.result;

        _this.props.handleBaseTokenChange(e, result);

        _this.setState({
          value: result.title
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSearchChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref3) {
        var _value = _ref3.value;

        _this.setState({
          isLoading: true,
          value: _value
        });

        setTimeout(function () {
          if (_this.state.value.length < 1) return _this.resetComponent();
          var re = new RegExp(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.escapeRegExp(_this.state.value), "i");

          var isMatch = function isMatch(result) {
            return re.test(result.title);
          };

          _this.setState({
            isLoading: false,
            results: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.filter(__WEBPACK_IMPORTED_MODULE_3__dummyData_js__["b" /* source */], isMatch)
          });
        }, 300);
      }
    }), _temp));
  }

  _createClass(BaseToken, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.resetComponent();
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      var _state = this.state,
          isLoading = _state.isLoading,
          value = _state.value,
          results = _state.results;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Segment */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Header */], {
        as: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Base Token"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["j" /* Search */], {
        fluid: true,
        loading: isLoading,
        onResultSelect: this.handleResultSelect,
        onSearchChange: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.debounce(this.handleSearchChange, 500, {
          leading: true
        }),
        results: results,
        defaultValue: this.props.baseToken,
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }));
    }
  }]);

  return BaseToken;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BaseToken);

/***/ })

})
//# sourceMappingURL=4.03278848e3bd8003a909.hot-update.js.map