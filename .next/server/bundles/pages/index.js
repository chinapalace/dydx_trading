module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "web3"
var external__web3_ = __webpack_require__(6);
var external__web3__default = /*#__PURE__*/__webpack_require__.n(external__web3_);

// CONCATENATED MODULE: ./web3.js

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new external__web3__default.a(window.web3.currentProvider);
} else {
  var provider = new external__web3__default.a.providers.HttpProvider('https://kovan.infura.io/orDImgKRzwNrVCDrAk5Q');
  web3 = new external__web3__default.a(provider);
}

/* harmony default export */ var web3_0 = (web3);
// CONCATENATED MODULE: ./margin.js

var abi = [{
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionPrincipal",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "token",
    "type": "address"
  }],
  "name": "reclaimToken",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPosition",
  "outputs": [{
    "name": "",
    "type": "address[4]"
  }, {
    "name": "",
    "type": "uint256[2]"
  }, {
    "name": "",
    "type": "uint32[6]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionStartTimestamp",
  "outputs": [{
    "name": "",
    "type": "uint32"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "contractAddr",
    "type": "address"
  }],
  "name": "reclaimContract",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionLender",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionRequiredDeposit",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "loanHash",
    "type": "bytes32"
  }],
  "name": "getLoanFilledAmount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionInterestRate",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "state",
    "type": "uint8"
  }],
  "name": "setOperationState",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionCallTimestamp",
  "outputs": [{
    "name": "",
    "type": "uint32"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "loanHash",
    "type": "bytes32"
  }],
  "name": "getLoanCanceledAmount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositioninterestPeriod",
  "outputs": [{
    "name": "",
    "type": "uint32"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "isPositionClosed",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionOwedToken",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "containsPosition",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "isPositionCalled",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "operationState",
  "outputs": [{
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionMaxDuration",
  "outputs": [{
    "name": "",
    "type": "uint32"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getTimeUntilInterestIncrease",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionOwedAmount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "loanHash",
    "type": "bytes32"
  }],
  "name": "getLoanUnavailableAmount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "reclaimEther",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "principalToClose",
    "type": "uint256"
  }, {
    "name": "timestamp",
    "type": "uint32"
  }],
  "name": "getPositionOwedAmountAtTime",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getTotalOwedTokenRepaidToLender",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "principalToAdd",
    "type": "uint256"
  }, {
    "name": "timestamp",
    "type": "uint32"
  }],
  "name": "getLenderAmountForIncreasePositionAtTime",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "from_",
    "type": "address"
  }, {
    "name": "value_",
    "type": "uint256"
  }, {
    "name": "data_",
    "type": "bytes"
  }],
  "name": "tokenFallback",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionHeldToken",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionCallTimeLimit",
  "outputs": [{
    "name": "",
    "type": "uint32"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "getPositionOwner",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "name": "vault",
    "type": "address"
  }, {
    "name": "proxy",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "fallback"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "from",
    "type": "uint8"
  }, {
    "indexed": false,
    "name": "to",
    "type": "uint8"
  }],
  "name": "OperationStateChanged",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "trader",
    "type": "address"
  }, {
    "indexed": true,
    "name": "lender",
    "type": "address"
  }, {
    "indexed": false,
    "name": "loanHash",
    "type": "bytes32"
  }, {
    "indexed": false,
    "name": "owedToken",
    "type": "address"
  }, {
    "indexed": false,
    "name": "heldToken",
    "type": "address"
  }, {
    "indexed": false,
    "name": "loanFeeRecipient",
    "type": "address"
  }, {
    "indexed": false,
    "name": "principal",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "heldTokenFromSell",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "depositAmount",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "interestRate",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "callTimeLimit",
    "type": "uint32"
  }, {
    "indexed": false,
    "name": "maxDuration",
    "type": "uint32"
  }, {
    "indexed": false,
    "name": "depositInHeldToken",
    "type": "bool"
  }],
  "name": "PositionOpened",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "trader",
    "type": "address"
  }, {
    "indexed": true,
    "name": "lender",
    "type": "address"
  }, {
    "indexed": false,
    "name": "positionOwner",
    "type": "address"
  }, {
    "indexed": false,
    "name": "loanOwner",
    "type": "address"
  }, {
    "indexed": false,
    "name": "loanHash",
    "type": "bytes32"
  }, {
    "indexed": false,
    "name": "loanFeeRecipient",
    "type": "address"
  }, {
    "indexed": false,
    "name": "amountBorrowed",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "principalAdded",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "heldTokenFromSell",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "depositAmount",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "depositInHeldToken",
    "type": "bool"
  }],
  "name": "PositionIncreased",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "closer",
    "type": "address"
  }, {
    "indexed": true,
    "name": "payoutRecipient",
    "type": "address"
  }, {
    "indexed": false,
    "name": "closeAmount",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "remainingAmount",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "owedTokenPaidToLender",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "payoutAmount",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "buybackCostInHeldToken",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "payoutInHeldToken",
    "type": "bool"
  }],
  "name": "PositionClosed",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "recipient",
    "type": "address"
  }, {
    "indexed": false,
    "name": "amount",
    "type": "uint256"
  }],
  "name": "CollateralForceRecovered",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "lender",
    "type": "address"
  }, {
    "indexed": true,
    "name": "owner",
    "type": "address"
  }, {
    "indexed": false,
    "name": "requiredDeposit",
    "type": "uint256"
  }],
  "name": "MarginCallInitiated",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "lender",
    "type": "address"
  }, {
    "indexed": true,
    "name": "owner",
    "type": "address"
  }, {
    "indexed": false,
    "name": "depositAmount",
    "type": "uint256"
  }],
  "name": "MarginCallCanceled",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "loanHash",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "payer",
    "type": "address"
  }, {
    "indexed": true,
    "name": "feeRecipient",
    "type": "address"
  }, {
    "indexed": false,
    "name": "cancelAmount",
    "type": "uint256"
  }],
  "name": "LoanOfferingCanceled",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": false,
    "name": "amount",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "depositor",
    "type": "address"
  }],
  "name": "AdditionalCollateralDeposited",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "name": "to",
    "type": "address"
  }],
  "name": "LoanTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "positionId",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "name": "to",
    "type": "address"
  }],
  "name": "PositionTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "previousOwner",
    "type": "address"
  }],
  "name": "OwnershipRenounced",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "constant": false,
  "inputs": [{
    "name": "addresses",
    "type": "address[11]"
  }, {
    "name": "values256",
    "type": "uint256[10]"
  }, {
    "name": "values32",
    "type": "uint32[4]"
  }, {
    "name": "depositInHeldToken",
    "type": "bool"
  }, {
    "name": "signature",
    "type": "bytes"
  }, {
    "name": "order",
    "type": "bytes"
  }],
  "name": "openPosition",
  "outputs": [{
    "name": "",
    "type": "bytes32"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "addresses",
    "type": "address[4]"
  }, {
    "name": "values256",
    "type": "uint256[3]"
  }, {
    "name": "values32",
    "type": "uint32[4]"
  }],
  "name": "openWithoutCounterparty",
  "outputs": [{
    "name": "",
    "type": "bytes32"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "addresses",
    "type": "address[7]"
  }, {
    "name": "values256",
    "type": "uint256[8]"
  }, {
    "name": "values32",
    "type": "uint32[2]"
  }, {
    "name": "depositInHeldToken",
    "type": "bool"
  }, {
    "name": "signature",
    "type": "bytes"
  }, {
    "name": "order",
    "type": "bytes"
  }],
  "name": "increasePosition",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "principalToAdd",
    "type": "uint256"
  }],
  "name": "increaseWithoutCounterparty",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "requestedCloseAmount",
    "type": "uint256"
  }, {
    "name": "payoutRecipient",
    "type": "address"
  }, {
    "name": "exchangeWrapper",
    "type": "address"
  }, {
    "name": "payoutInHeldToken",
    "type": "bool"
  }, {
    "name": "order",
    "type": "bytes"
  }],
  "name": "closePosition",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "requestedCloseAmount",
    "type": "uint256"
  }, {
    "name": "payoutRecipient",
    "type": "address"
  }],
  "name": "closePositionDirectly",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "requestedCloseAmount",
    "type": "uint256"
  }, {
    "name": "payoutRecipient",
    "type": "address"
  }],
  "name": "closeWithoutCounterparty",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "requiredDeposit",
    "type": "uint256"
  }],
  "name": "marginCall",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }],
  "name": "cancelMarginCall",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "recipient",
    "type": "address"
  }],
  "name": "forceRecoverCollateral",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "depositAmount",
    "type": "uint256"
  }],
  "name": "depositCollateral",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "addresses",
    "type": "address[9]"
  }, {
    "name": "values256",
    "type": "uint256[7]"
  }, {
    "name": "values32",
    "type": "uint32[4]"
  }, {
    "name": "cancelAmount",
    "type": "uint256"
  }],
  "name": "cancelLoanOffering",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "who",
    "type": "address"
  }],
  "name": "transferLoan",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "positionId",
    "type": "bytes32"
  }, {
    "name": "who",
    "type": "address"
  }],
  "name": "transferPosition",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getVaultAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getProxyAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
var instance = new web3_0.eth.Contract(abi, '0xeec4c7032ecddc47182134933662f9b06b4fdc64');
/* harmony default export */ var margin = (instance);
// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(1);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.jsx



/* harmony default export */ var Layout = (function (props) {
  var style = {
    h1: {
      marginTop: "3em"
    },
    h2: {
      margin: "4em 0em 2em"
    },
    h3: {
      marginTop: "2em",
      padding: "2em 0em"
    },
    last: {
      marginBottom: "300px"
    }
  };
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
  })), external__react__default.a.createElement("div", null, external__react__default.a.createElement("img", {
    style: {
      display: "inline-block",
      verticalAlign: "middle"
    },
    src: "../static/images/logo.png",
    alt: "",
    width: "132.6",
    height: "66.3"
  }), external__react__default.a.createElement("span", {
    style: {
      verticalAlign: "middle",
      display: "inline-block",
      fontSize: "28px"
    }
  }, "|  Trading")), external__react__default.a.createElement(external__semantic_ui_react_["Divider"], {
    style: {
      marginTop: 0
    }
  }), props.children);
});
// CONCATENATED MODULE: ./components/OwedTokenList.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var OwedTokenList_OwedTokenList =
/*#__PURE__*/
function (_Component) {
  _inherits(OwedTokenList, _Component);

  function OwedTokenList() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, OwedTokenList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = OwedTokenList.__proto__ || Object.getPrototypeOf(OwedTokenList)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        activeItem: 0
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleItemClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref2) {
        var name = _ref2.name;

        _this.props.handleOwedTokenSelect(e, name);

        _this.setState({
          activeItem: name
        });
      }
    }), _temp));
  }

  _createClass(OwedTokenList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeItem = this.state.activeItem;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        sub: true
      }, "Borrow Owed Token"), external__react__default.a.createElement(external__semantic_ui_react_["Segment"], {
        style: {
          overflow: "auto",
          maxHeight: 135,
          padding: "0px"
        }
      }, external__react__default.a.createElement(external__semantic_ui_react_["List"], {
        selection: true,
        divided: true,
        relaxed: true
      }, this.props.data.map(function (item, index) {
        var interestRate = item.interestRate,
            takerTokenAmount = item.takerTokenAmount;
        var expiration = new Date(item.expirationTimestamp);
        return external__react__default.a.createElement(external__semantic_ui_react_["List"].Item, {
          key: index,
          name: index,
          active: activeItem === index,
          onClick: _this2.handleItemClick
        }, external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, {
          floated: "right"
        }, expiration.toLocaleDateString()), external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["List"].Header, null, "Interest: ", interestRate, " %"), external__react__default.a.createElement(external__semantic_ui_react_["List"].Description, null, "Fees: ", item.lenderFee)));
      }))));
    }
  }]);

  return OwedTokenList;
}(external__react_["Component"]);

/* harmony default export */ var components_OwedTokenList = (OwedTokenList_OwedTokenList);
// CONCATENATED MODULE: ./components/TradeTicket.jsx
function TradeTicket__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TradeTicket__typeof = function _typeof(obj) { return typeof obj; }; } else { TradeTicket__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TradeTicket__typeof(obj); }

function TradeTicket__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TradeTicket__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TradeTicket__createClass(Constructor, protoProps, staticProps) { if (protoProps) TradeTicket__defineProperties(Constructor.prototype, protoProps); if (staticProps) TradeTicket__defineProperties(Constructor, staticProps); return Constructor; }

function TradeTicket__possibleConstructorReturn(self, call) { if (call && (TradeTicket__typeof(call) === "object" || typeof call === "function")) { return call; } return TradeTicket__assertThisInitialized(self); }

function TradeTicket__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function TradeTicket__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var data = {
  DGD: "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A",
  GNT: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
  MKR: "0xECF8F87f810EcF450940c9f60066b4a7a501d6A7",
  MLN: "0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1",
  REP: "0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5",
  WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  ZRX: "0xe41d2489571d322189246dafa5ebde1f4699f498"
};

var TradeTicket_TradeTicket =
/*#__PURE__*/
function (_Component) {
  TradeTicket__inherits(TradeTicket, _Component);

  function TradeTicket() {
    var _ref;

    var _temp, _this;

    TradeTicket__classCallCheck(this, TradeTicket);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return TradeTicket__possibleConstructorReturn(_this, (_temp = _this = TradeTicket__possibleConstructorReturn(this, (_ref = TradeTicket.__proto__ || Object.getPrototypeOf(TradeTicket)).call.apply(_ref, [this].concat(args))), Object.defineProperty(TradeTicket__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        asks: [],
        activeItem: 0
      }
    }), Object.defineProperty(TradeTicket__assertThisInitialized(_this), "handleItemClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref2) {
        var name = _ref2.name;
        return _this.setState({
          activeItem: name
        });
      }
    }), _temp));
  }

  TradeTicket__createClass(TradeTicket, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = "https://api.radarrelay.com/0x/v0/orderbook?baseTokenAddress=".concat(data.ZRX, "&quoteTokenAddress=").concat(data.WETH);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        var asks = data.asks;

        _this2.setState({
          asks: asks.slice(0, 10)
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (this.props.baseToken !== prevProps.baseToken || this.props.quoteToken !== prevProps.quoteToken) {
        var url = "https://api.radarrelay.com/0x/v0/orderbook?baseTokenAddress=".concat(data[this.props.baseToken], "&quoteTokenAddress=").concat(data[this.props.quoteToken]);
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          var asks = data.asks;

          _this3.setState({
            asks: asks.slice(0, 10)
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var activeItem = this.state.activeItem;
      return external__react__default.a.createElement(external__semantic_ui_react_["Segment"], null, external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        as: "h3"
      }, "Trade Ticket"), external__react__default.a.createElement(external__semantic_ui_react_["Segment"], {
        basic: true
      }, external__react__default.a.createElement(external__semantic_ui_react_["Button"].Group, null, external__react__default.a.createElement(external__semantic_ui_react_["Button"], {
        active: true
      }, "Sell Short"), external__react__default.a.createElement(external__semantic_ui_react_["Button"], {
        disabled: true
      }, "Leverage Long")), external__react__default.a.createElement(external__semantic_ui_react_["Divider"], {
        hidden: true
      }), external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        sub: true
      }, "Quantity"), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        type: "text",
        value: this.props.quantity,
        onChange: this.props.handleQuantityChange,
        action: true
      }, external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Button"], {
        onClick: this.props.incrementQuantity
      }, "+"), external__react__default.a.createElement(external__semantic_ui_react_["Button"], {
        onClick: this.props.decrementQuantity
      }, "-")), external__react__default.a.createElement(external__semantic_ui_react_["Divider"], {
        hidden: true
      }), external__react__default.a.createElement(components_OwedTokenList, {
        asks: this.state.asks,
        handleOwedTokenSelect: this.props.handleOwedTokenSelect,
        data: this.props.data
      }), external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        sub: true
      }, "Buy Held Token"), external__react__default.a.createElement(external__semantic_ui_react_["Segment"], {
        style: {
          overflow: "auto",
          maxHeight: 135,
          padding: "0px"
        }
      }, external__react__default.a.createElement(external__semantic_ui_react_["List"], {
        selection: true,
        divided: true,
        relaxed: true
      }, this.state.asks.map(function (item, index) {
        var makerTokenAmount = item.makerTokenAmount,
            takerTokenAmount = item.takerTokenAmount;
        var price = makerTokenAmount / takerTokenAmount;
        var expiration = new Date(item.expirationUnixTimestampSec * 1000);
        return external__react__default.a.createElement(external__semantic_ui_react_["List"].Item, {
          key: index,
          name: index,
          active: activeItem === index,
          onClick: _this4.handleItemClick
        }, external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, {
          floated: "right"
        }, expiration.toLocaleDateString()), external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["List"].Header, null, "Price: ", price), external__react__default.a.createElement(external__semantic_ui_react_["List"].Description, null, "Fees: ", item.makerFee)));
      }))))));
    }
  }]);

  return TradeTicket;
}(external__react_["Component"]);

/* harmony default export */ var components_TradeTicket = (TradeTicket_TradeTicket);
// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(2);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./dummyData.js
var dummyData_data = {
  loanOffering: [{
    owedToken: "0xf25186b5081ff5ce73482ad761db0eb0d25abfbf",
    heldToken: "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
    payer: "0xf17f52151ebef6c7334fad080c5704d77216b732",
    owner: "0xf17f52151ebef6c7334fad080c5704d77216b732",
    taker: "0x0000000000000000000000000000000000000000",
    positionOwner: "0x0000000000000000000000000000000000000000",
    feeRecipient: "0x821aea9a577a9b44299b9c15c88cf3087f3b5544",
    lenderFeeTokenAddress: "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f",
    takerFeeTokenAddress: "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f",
    rates: {
      maxAmount: 3098765432109876541
    },
    minAmount: 1,
    minHeldToken: 0,
    lenderFee: 0,
    takerFee: 0,
    interestRate: 3.0,
    interestPeriod: 60 * 60 * 24,
    expirationTimestamp: 1563839311000,
    callTimeLimit: 10000,
    maxDuration: 31536000,
    salt: 425,
    loanHash: "0xd29971158343a361a1f269e0e698869c59f9565b4dd58947157282dda23d9746",
    signature: "0xba3be16b10798dfd62e3d12d71a829e19e09ae1b3a88d9d406650618af6a21383909ea19d8e27bbc29f9aa828e145e3016aacf96773d71dea25ea5c9c62794821c"
  }, {
    owedToken: "0xf25186b5081ff5ce73482ad761db0eb0d25abfbf",
    heldToken: "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
    payer: "0xf17f52151ebef6c7334fad080c5704d77216b732",
    owner: "0xf17f52151ebef6c7334fad080c5704d77216b732",
    taker: "0x0000000000000000000000000000000000000000",
    positionOwner: "0x0000000000000000000000000000000000000000",
    feeRecipient: "0x821aea9a577a9b44299b9c15c88cf3087f3b5544",
    lenderFeeTokenAddress: "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f",
    takerFeeTokenAddress: "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f",
    rates: {
      maxAmount: 3098765432109876541
    },
    minAmount: 1,
    minHeldToken: 0,
    lenderFee: 0,
    takerFee: 0,
    interestRate: 3.65,
    interestPeriod: 60 * 60 * 24,
    expirationTimestamp: 1563839311000,
    callTimeLimit: 10000,
    maxDuration: 31536000,
    salt: 425,
    loanHash: "0xd29971158343a361a1f269e0e698869c59f9565b4dd58947157282dda23d9746",
    signature: "0xba3be16b10798dfd62e3d12d71a829e19e09ae1b3a88d9d406650618af6a21383909ea19d8e27bbc29f9aa828e145e3016aacf96773d71dea25ea5c9c62794821c"
  }, {
    owedToken: "0xf25186b5081ff5ce73482ad761db0eb0d25abfbf",
    heldToken: "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
    payer: "0xf17f52151ebef6c7334fad080c5704d77216b732",
    owner: "0xf17f52151ebef6c7334fad080c5704d77216b732",
    taker: "0x0000000000000000000000000000000000000000",
    positionOwner: "0x0000000000000000000000000000000000000000",
    feeRecipient: "0x821aea9a577a9b44299b9c15c88cf3087f3b5544",
    lenderFeeTokenAddress: "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f",
    takerFeeTokenAddress: "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f",
    rates: {
      maxAmount: 3098765432109876541
    },
    minAmount: 1,
    minHeldToken: 0,
    lenderFee: 0,
    takerFee: 0,
    interestRate: 3.65,
    interestPeriod: 60 * 60 * 24,
    expirationTimestamp: 1563839311000,
    callTimeLimit: 10000,
    maxDuration: 31536000,
    salt: 425,
    loanHash: "0xd29971158343a361a1f269e0e698869c59f9565b4dd58947157282dda23d9746",
    signature: "0xba3be16b10798dfd62e3d12d71a829e19e09ae1b3a88d9d406650618af6a21383909ea19d8e27bbc29f9aa828e145e3016aacf96773d71dea25ea5c9c62794821c"
  }]
};
/* harmony default export */ var dummyData = (dummyData_data);
var source = [{
  title: "DGD",
  description: "DigixDAO",
  image: "../static/images/token_icons/DGD.png"
}, {
  title: "GNT",
  description: "Golem",
  image: "../static/images/token_icons/GNT.png"
}, {
  title: "MKR",
  description: "Maker",
  image: "../static/images/token_icons/MKR.png"
}, {
  title: "MLN",
  description: "Melon",
  image: "../static/images/token_icons/MLN.png"
}, {
  title: "REP",
  description: "Augur",
  image: "../static/images/token_icons/REP.png"
}, {
  title: "WETH",
  description: "Wrapped ETH",
  image: "../static/images/token_icons/WETH.png"
}, {
  title: "ZRX",
  description: "Zero Exchange",
  image: "../static/images/token_icons/ZRX.png"
}];
// CONCATENATED MODULE: ./components/BaseToken.jsx
function BaseToken__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BaseToken__typeof = function _typeof(obj) { return typeof obj; }; } else { BaseToken__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BaseToken__typeof(obj); }

function BaseToken__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaseToken__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BaseToken__createClass(Constructor, protoProps, staticProps) { if (protoProps) BaseToken__defineProperties(Constructor.prototype, protoProps); if (staticProps) BaseToken__defineProperties(Constructor, staticProps); return Constructor; }

function BaseToken__possibleConstructorReturn(self, call) { if (call && (BaseToken__typeof(call) === "object" || typeof call === "function")) { return call; } return BaseToken__assertThisInitialized(self); }

function BaseToken__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function BaseToken__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BaseToken_BaseToken =
/*#__PURE__*/
function (_Component) {
  BaseToken__inherits(BaseToken, _Component);

  function BaseToken() {
    var _ref;

    var _temp, _this;

    BaseToken__classCallCheck(this, BaseToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return BaseToken__possibleConstructorReturn(_this, (_temp = _this = BaseToken__possibleConstructorReturn(this, (_ref = BaseToken.__proto__ || Object.getPrototypeOf(BaseToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(BaseToken__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(BaseToken__assertThisInitialized(_this), "resetComponent", {
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
    }), Object.defineProperty(BaseToken__assertThisInitialized(_this), "handleResultSelect", {
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
    }), Object.defineProperty(BaseToken__assertThisInitialized(_this), "handleSearchChange", {
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
          var re = new RegExp(external__lodash__default.a.escapeRegExp(_this.state.value), "i");

          var isMatch = function isMatch(result) {
            return re.test(result.title);
          };

          _this.setState({
            isLoading: false,
            results: external__lodash__default.a.filter(source, isMatch)
          });
        }, 300);
      }
    }), _temp));
  }

  BaseToken__createClass(BaseToken, [{
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
      return external__react__default.a.createElement(external__semantic_ui_react_["Segment"], null, external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        as: "h3"
      }, "Base Token"), external__react__default.a.createElement(external__semantic_ui_react_["Search"], {
        fluid: true,
        loading: isLoading,
        onResultSelect: this.handleResultSelect,
        onSearchChange: external__lodash__default.a.debounce(this.handleSearchChange, 500, {
          leading: true
        }),
        results: results,
        defaultValue: this.props.baseToken
      }));
    }
  }]);

  return BaseToken;
}(external__react_["Component"]);

/* harmony default export */ var components_BaseToken = (BaseToken_BaseToken);
// CONCATENATED MODULE: ./components/QuoteToken.jsx
function QuoteToken__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { QuoteToken__typeof = function _typeof(obj) { return typeof obj; }; } else { QuoteToken__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return QuoteToken__typeof(obj); }

function QuoteToken__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function QuoteToken__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function QuoteToken__createClass(Constructor, protoProps, staticProps) { if (protoProps) QuoteToken__defineProperties(Constructor.prototype, protoProps); if (staticProps) QuoteToken__defineProperties(Constructor, staticProps); return Constructor; }

function QuoteToken__possibleConstructorReturn(self, call) { if (call && (QuoteToken__typeof(call) === "object" || typeof call === "function")) { return call; } return QuoteToken__assertThisInitialized(self); }

function QuoteToken__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function QuoteToken__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var QuoteToken_QuoteToken =
/*#__PURE__*/
function (_Component) {
  QuoteToken__inherits(QuoteToken, _Component);

  function QuoteToken() {
    var _ref;

    var _temp, _this;

    QuoteToken__classCallCheck(this, QuoteToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return QuoteToken__possibleConstructorReturn(_this, (_temp = _this = QuoteToken__possibleConstructorReturn(this, (_ref = QuoteToken.__proto__ || Object.getPrototypeOf(QuoteToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(QuoteToken__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(QuoteToken__assertThisInitialized(_this), "resetComponent", {
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
    }), Object.defineProperty(QuoteToken__assertThisInitialized(_this), "handleResultSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref2) {
        var result = _ref2.result;

        _this.props.handleQuoteTokenChange(e, result);

        _this.setState({
          value: result.title
        });
      }
    }), Object.defineProperty(QuoteToken__assertThisInitialized(_this), "handleSearchChange", {
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
          var re = new RegExp(external__lodash__default.a.escapeRegExp(_this.state.value), "i");

          var isMatch = function isMatch(result) {
            return re.test(result.title);
          };

          _this.setState({
            isLoading: false,
            results: external__lodash__default.a.filter(source, isMatch)
          });
        }, 300);
      }
    }), _temp));
  }

  QuoteToken__createClass(QuoteToken, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.resetComponent();
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          value = _state.value,
          results = _state.results;
      return external__react__default.a.createElement(external__semantic_ui_react_["Segment"], null, external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        as: "h3"
      }, "Quote Token"), external__react__default.a.createElement(external__semantic_ui_react_["Search"], {
        fluid: true,
        loading: isLoading,
        onResultSelect: this.handleResultSelect,
        onSearchChange: external__lodash__default.a.debounce(this.handleSearchChange, 500, {
          leading: true
        }),
        results: results,
        defaultValue: this.props.quoteToken
      }));
    }
  }]);

  return QuoteToken;
}(external__react_["Component"]);

/* harmony default export */ var components_QuoteToken = (QuoteToken_QuoteToken);
// CONCATENATED MODULE: ./components/Market.jsx
function Market__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Market__typeof = function _typeof(obj) { return typeof obj; }; } else { Market__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Market__typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Market__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Market__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Market__createClass(Constructor, protoProps, staticProps) { if (protoProps) Market__defineProperties(Constructor.prototype, protoProps); if (staticProps) Market__defineProperties(Constructor, staticProps); return Constructor; }

function Market__possibleConstructorReturn(self, call) { if (call && (Market__typeof(call) === "object" || typeof call === "function")) { return call; } return Market__assertThisInitialized(self); }

function Market__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Market__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Market_Market =
/*#__PURE__*/
function (_Component) {
  Market__inherits(Market, _Component);

  function Market() {
    var _ref;

    var _temp, _this;

    Market__classCallCheck(this, Market);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Market__possibleConstructorReturn(_this, (_temp = _this = Market__possibleConstructorReturn(this, (_ref = Market.__proto__ || Object.getPrototypeOf(Market)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Market__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), _temp));
  }

  Market__createClass(Market, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = "https://api.radarrelay.com/v0/markets/".concat(this.props.baseToken, "-").concat(this.props.quoteToken, "/ticker");
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState(_objectSpread({}, data));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (this.props.baseToken !== prevProps.baseToken || this.props.quoteToken !== prevProps.quoteToken) {
        var url = "https://api.radarrelay.com/v0/markets/".concat(this.props.baseToken, "-").concat(this.props.quoteToken, "/ticker");
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this3.setState(_objectSpread({}, data));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Segment"], null, external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        as: "h3"
      }, "Market"), external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        style: {
          textTransform: "uppercase"
        },
        as: "h5"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Segment"], {
        tertiary: true,
        style: {
          display: "flex",
          justifyContent: "space-around"
        }
      }, external__react__default.a.createElement("span", null, external__react__default.a.createElement(external__semantic_ui_react_["Image"], {
        src: "../static/images/token_icons/".concat(this.props.baseToken, ".png"),
        avatar: true
      }), this.props.baseToken), external__react__default.a.createElement("span", null, external__react__default.a.createElement(external__semantic_ui_react_["Image"], {
        src: "../static/images/token_icons/".concat(this.props.quoteToken, ".png"),
        avatar: true
      }), "".concat(this.props.quoteToken, " ")))), external__react__default.a.createElement(external__semantic_ui_react_["Segment"], {
        basic: true
      }, external__react__default.a.createElement(external__semantic_ui_react_["List"], {
        style: {
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis"
        }
      }, external__react__default.a.createElement(external__semantic_ui_react_["List"].Item, null, external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, {
        floated: "right",
        style: {
          width: "80px",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, this.state.price), external__react__default.a.createElement(external__semantic_ui_react_["List"].Header, null, "Last Price")), external__react__default.a.createElement(external__semantic_ui_react_["List"].Item, null, external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, {
        floated: "right",
        style: {
          width: "60px",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, this.state.bid), external__react__default.a.createElement(external__semantic_ui_react_["List"].Header, null, "Bid")), external__react__default.a.createElement(external__semantic_ui_react_["List"].Item, null, external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, {
        floated: "right",
        style: {
          width: "60px",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, this.state.ask), external__react__default.a.createElement(external__semantic_ui_react_["List"].Header, null, "Ask")), external__react__default.a.createElement(external__semantic_ui_react_["List"].Item, null, external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, {
        floated: "right",
        style: {
          width: "60px",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, this.state.size), external__react__default.a.createElement(external__semantic_ui_react_["List"].Header, null, "Size")), external__react__default.a.createElement(external__semantic_ui_react_["List"].Item, null, external__react__default.a.createElement(external__semantic_ui_react_["List"].Content, {
        floated: "right",
        style: {
          width: "60px",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, this.state.volume), external__react__default.a.createElement(external__semantic_ui_react_["List"].Header, null, "Volume")))));
    }
  }]);

  return Market;
}(external__react_["Component"]);

/* harmony default export */ var components_Market = (Market_Market);
// CONCATENATED MODULE: ./components/OrderSummary.jsx
function OrderSummary__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { OrderSummary__typeof = function _typeof(obj) { return typeof obj; }; } else { OrderSummary__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return OrderSummary__typeof(obj); }

function OrderSummary__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OrderSummary__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OrderSummary__createClass(Constructor, protoProps, staticProps) { if (protoProps) OrderSummary__defineProperties(Constructor.prototype, protoProps); if (staticProps) OrderSummary__defineProperties(Constructor, staticProps); return Constructor; }

function OrderSummary__possibleConstructorReturn(self, call) { if (call && (OrderSummary__typeof(call) === "object" || typeof call === "function")) { return call; } return OrderSummary__assertThisInitialized(self); }

function OrderSummary__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OrderSummary__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var OrderSummary_OrderSummary =
/*#__PURE__*/
function (_Component) {
  OrderSummary__inherits(OrderSummary, _Component);

  function OrderSummary() {
    OrderSummary__classCallCheck(this, OrderSummary);

    return OrderSummary__possibleConstructorReturn(this, (OrderSummary.__proto__ || Object.getPrototypeOf(OrderSummary)).apply(this, arguments));
  }

  OrderSummary__createClass(OrderSummary, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Segment"], null, external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
        as: "h3"
      }, "Order Summary"), external__react__default.a.createElement(external__semantic_ui_react_["Message"], null, external__react__default.a.createElement("b", null, "Sell Short"), external__react__default.a.createElement("span", null, " ", this.props.quantity, " shares of "), external__react__default.a.createElement("b", null, this.props.baseToken), external__react__default.a.createElement("span", null, " against "), external__react__default.a.createElement("b", null, this.props.quoteToken), external__react__default.a.createElement("span", null, " for "), external__react__default.a.createElement("b", null, this.props.interestRate, "%"), external__react__default.a.createElement("span", null, " interest.")), external__react__default.a.createElement(external__semantic_ui_react_["Message"], {
        warning: true
      }, "Total Fees: ", this.props.fees), external__react__default.a.createElement(external__semantic_ui_react_["Message"], {
        color: "blue",
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, "Earnings paid in ", external__react__default.a.createElement("b", null, this.props.quoteToken), " to: ", external__react__default.a.createElement("br", null), external__react__default.a.createElement("span", null, this.props.account)), external__react__default.a.createElement(external__semantic_ui_react_["Button"], {
        primary: true,
        fluid: true,
        onClick: this.props.handleMarginCall
      }, "Preview Order"));
    }
  }]);

  return OrderSummary;
}(external__react_["Component"]);

/* harmony default export */ var components_OrderSummary = (OrderSummary_OrderSummary);
// CONCATENATED MODULE: ./pages/index.js


function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { pages__defineProperty(target, key, source[key]); }); } return target; }

function pages__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var pages_CampaignIndex =
/*#__PURE__*/
function (_Component) {
  pages__inherits(CampaignIndex, _Component);

  pages__createClass(CampaignIndex, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var owner;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return margin.methods.owner().call();

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

    pages__classCallCheck(this, CampaignIndex);

    _this = pages__possibleConstructorReturn(this, (CampaignIndex.__proto__ || Object.getPrototypeOf(CampaignIndex)).call(this, props));
    Object.defineProperty(pages__assertThisInitialized(_this), "handleQuantityChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          quantity: e.target.value
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "handleBaseTokenChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, result) {
        _this.setState({
          baseToken: result.title
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "handleQuoteTokenChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, result) {
        _this.setState({
          quoteToken: result.title
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "handleOwedTokenSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, i) {
        _this.setState({
          owedTokenInterest: dummyData.loanOffering[i].interestRate
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "incrementQuantity", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, result) {
        _this.setState({
          quantity: _this.state.quantity + 10
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "decrementQuantity", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          quantity: _this.state.quantity - 10
        });
      }
    });
    _this.state = pages__objectSpread({
      quantity: 0
    }, _this.props, {
      baseToken: "ZRX",
      quoteToken: "WETH",
      owedTokenInterest: dummyData.loanOffering[0].interestRate,
      fees: 0
    });
    return _this;
  }

  pages__createClass(CampaignIndex, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2() {
        var account;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return web3_0.eth.getAccounts();

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
    key: "handleMarginCall",
    value: function handleMarginCall() {
      marginCall();
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout, null, external__react__default.a.createElement("div", {
        style: {
          padding: "50px 70px"
        }
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], {
        columns: 3,
        doubling: true,
        stackable: true
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, {
        computer: 4,
        mobile: 4,
        tablet: 4
      }, external__react__default.a.createElement(components_BaseToken, {
        baseToken: this.state.baseToken,
        handleBaseTokenChange: this.handleBaseTokenChange
      }), external__react__default.a.createElement(components_QuoteToken, {
        quoteToken: this.state.quoteToken,
        handleQuoteTokenChange: this.handleQuoteTokenChange
      }), external__react__default.a.createElement(components_Market, {
        baseToken: this.state.baseToken,
        quoteToken: this.state.quoteToken
      })), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, {
        computer: 8,
        mobile: 8,
        tablet: 8
      }, external__react__default.a.createElement(components_TradeTicket, {
        baseToken: this.state.baseToken,
        quoteToken: this.state.quoteToken,
        data: dummyData.loanOffering,
        quantity: this.state.quantity,
        handleQuantityChange: this.handleQuantityChange,
        handleOwedTokenSelect: this.handleOwedTokenSelect,
        incrementQuantity: this.incrementQuantity,
        decrementQuantity: this.decrementQuantity
      })), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, {
        computer: 4,
        mobile: 4,
        tablet: 4
      }, external__react__default.a.createElement(components_OrderSummary, {
        account: this.state.account,
        quantity: this.state.quantity,
        baseToken: this.state.baseToken,
        quoteToken: this.state.quoteToken,
        interestRate: this.state.owedTokenInterest,
        fees: this.state.fees,
        handleMarginCall: this.handleMarginCall
      })))));
    }
  }]);

  return CampaignIndex;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_CampaignIndex);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);