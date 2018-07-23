webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__margin__ = __webpack_require__("./margin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web3__ = __webpack_require__("./web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout__ = __webpack_require__("./components/Layout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_TradeTicket__ = __webpack_require__("./components/TradeTicket.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_BaseToken__ = __webpack_require__("./components/BaseToken.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_QuoteToken__ = __webpack_require__("./components/QuoteToken.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Market__ = __webpack_require__("./components/Market.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_OrderSummary__ = __webpack_require__("./components/OrderSummary.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dummyData__ = __webpack_require__("./dummyData.js");

var _jsxFileName = "/Users/justinmclaren/Desktop/dydx/client/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var CampaignIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(CampaignIndex, _Component);

  _createClass(CampaignIndex, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var owner;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__margin__["a" /* default */].methods.owner().call();

              case 2:
                owner = _context.sent;
                return _context.abrupt("return", {
                  owner: owner
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function CampaignIndex(props) {
    var _this;

    _classCallCheck(this, CampaignIndex);

    _this = _possibleConstructorReturn(this, (CampaignIndex.__proto__ || Object.getPrototypeOf(CampaignIndex)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleQuantityChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          quantity: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleBaseTokenChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, result) {
        _this.setState({
          baseToken: result.title
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleQuoteTokenChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, result) {
        _this.setState({
          quoteToken: result.title
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleOwedTokenSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, i) {
        _this.setState({
          owedTokenInterest: __WEBPACK_IMPORTED_MODULE_11__dummyData__["a" /* default */].loanOffering[i].interestRate
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "incrementQuantity", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, result) {
        _this.setState({
          quantity: _this.state.quantity + 10
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "decrementQuantity", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          quantity: _this.state.quantity - 10
        });
      }
    });
    _this.state = _objectSpread({
      quantity: 0
    }, _this.props, {
      baseToken: "ZRX",
      quoteToken: "WETH",
      owedTokenInterest: __WEBPACK_IMPORTED_MODULE_11__dummyData__["a" /* default */].loanOffering[0].interestRate,
      fees: 0
    });
    return _this;
  }

  _createClass(CampaignIndex, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var account;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__web3__["a" /* default */].eth.getAccounts();

              case 2:
                account = _context2.sent;
                this.setState({
                  account: account[0]
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["d" /* Grid */], {
        columns: 3,
        doubling: true,
        stackable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["d" /* Grid */].Column, {
        computer: 4,
        mobile: 4,
        tablet: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_BaseToken__["a" /* default */], {
        baseToken: this.state.baseToken,
        handleBaseTokenChange: this.handleBaseTokenChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_QuoteToken__["a" /* default */], {
        quoteToken: this.state.quoteToken,
        handleQuoteTokenChange: this.handleQuoteTokenChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Market__["a" /* default */], {
        baseToken: this.state.baseToken,
        quoteToken: this.state.quoteToken,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["d" /* Grid */].Column, {
        computer: 8,
        mobile: 8,
        tablet: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_TradeTicket__["a" /* default */], {
        baseToken: this.state.baseToken,
        quoteToken: this.state.quoteToken,
        data: __WEBPACK_IMPORTED_MODULE_11__dummyData__["a" /* default */].loanOffering,
        quantity: this.state.quantity,
        handleQuantityChange: this.handleQuantityChange,
        handleOwedTokenSelect: this.handleOwedTokenSelect,
        incrementQuantity: this.incrementQuantity,
        decrementQuantity: this.decrementQuantity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["d" /* Grid */].Column, {
        computer: 4,
        mobile: 4,
        tablet: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_OrderSummary__["a" /* default */], {
        account: this.state.account,
        quantity: this.state.quantity,
        baseToken: this.state.baseToken,
        quoteToken: this.state.quoteToken,
        interestRate: this.state.owedTokenInterest,
        fees: this.state.fees,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })))));
    }
  }]);

  return CampaignIndex;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.573879403eea36a4087d.hot-update.js.map