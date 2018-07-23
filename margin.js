import web3 from './web3';


const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionPrincipal",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "token",
        "type": "address"
      }
    ],
    "name": "reclaimToken",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPosition",
    "outputs": [
      {
        "name": "",
        "type": "address[4]"
      },
      {
        "name": "",
        "type": "uint256[2]"
      },
      {
        "name": "",
        "type": "uint32[6]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionStartTimestamp",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "contractAddr",
        "type": "address"
      }
    ],
    "name": "reclaimContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionLender",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionRequiredDeposit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "loanHash",
        "type": "bytes32"
      }
    ],
    "name": "getLoanFilledAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionInterestRate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "state",
        "type": "uint8"
      }
    ],
    "name": "setOperationState",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionCallTimestamp",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "loanHash",
        "type": "bytes32"
      }
    ],
    "name": "getLoanCanceledAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositioninterestPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "isPositionClosed",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionOwedToken",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "containsPosition",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "isPositionCalled",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "operationState",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionMaxDuration",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getTimeUntilInterestIncrease",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionOwedAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "loanHash",
        "type": "bytes32"
      }
    ],
    "name": "getLoanUnavailableAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "reclaimEther",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "principalToClose",
        "type": "uint256"
      },
      {
        "name": "timestamp",
        "type": "uint32"
      }
    ],
    "name": "getPositionOwedAmountAtTime",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getTotalOwedTokenRepaidToLender",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "principalToAdd",
        "type": "uint256"
      },
      {
        "name": "timestamp",
        "type": "uint32"
      }
    ],
    "name": "getLenderAmountForIncreasePositionAtTime",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "from_",
        "type": "address"
      },
      {
        "name": "value_",
        "type": "uint256"
      },
      {
        "name": "data_",
        "type": "bytes"
      }
    ],
    "name": "tokenFallback",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionHeldToken",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionCallTimeLimit",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionOwner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "vault",
        "type": "address"
      },
      {
        "name": "proxy",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "from",
        "type": "uint8"
      },
      {
        "indexed": false,
        "name": "to",
        "type": "uint8"
      }
    ],
    "name": "OperationStateChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "trader",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "loanHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "owedToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "heldToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "loanFeeRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "principal",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "heldTokenFromSell",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "interestRate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "callTimeLimit",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "maxDuration",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "depositInHeldToken",
        "type": "bool"
      }
    ],
    "name": "PositionOpened",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "trader",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "positionOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "loanOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "loanHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "loanFeeRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amountBorrowed",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "principalAdded",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "heldTokenFromSell",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "depositInHeldToken",
        "type": "bool"
      }
    ],
    "name": "PositionIncreased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "closer",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "payoutRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "closeAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "remainingAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "owedTokenPaidToLender",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "payoutAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "buybackCostInHeldToken",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "payoutInHeldToken",
        "type": "bool"
      }
    ],
    "name": "PositionClosed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "CollateralForceRecovered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "requiredDeposit",
        "type": "uint256"
      }
    ],
    "name": "MarginCallInitiated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "depositAmount",
        "type": "uint256"
      }
    ],
    "name": "MarginCallCanceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "loanHash",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "payer",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "feeRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "cancelAmount",
        "type": "uint256"
      }
    ],
    "name": "LoanOfferingCanceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "depositor",
        "type": "address"
      }
    ],
    "name": "AdditionalCollateralDeposited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      }
    ],
    "name": "LoanTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      }
    ],
    "name": "PositionTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipRenounced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addresses",
        "type": "address[11]"
      },
      {
        "name": "values256",
        "type": "uint256[10]"
      },
      {
        "name": "values32",
        "type": "uint32[4]"
      },
      {
        "name": "depositInHeldToken",
        "type": "bool"
      },
      {
        "name": "signature",
        "type": "bytes"
      },
      {
        "name": "order",
        "type": "bytes"
      }
    ],
    "name": "openPosition",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addresses",
        "type": "address[4]"
      },
      {
        "name": "values256",
        "type": "uint256[3]"
      },
      {
        "name": "values32",
        "type": "uint32[4]"
      }
    ],
    "name": "openWithoutCounterparty",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "addresses",
        "type": "address[7]"
      },
      {
        "name": "values256",
        "type": "uint256[8]"
      },
      {
        "name": "values32",
        "type": "uint32[2]"
      },
      {
        "name": "depositInHeldToken",
        "type": "bool"
      },
      {
        "name": "signature",
        "type": "bytes"
      },
      {
        "name": "order",
        "type": "bytes"
      }
    ],
    "name": "increasePosition",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "principalToAdd",
        "type": "uint256"
      }
    ],
    "name": "increaseWithoutCounterparty",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "requestedCloseAmount",
        "type": "uint256"
      },
      {
        "name": "payoutRecipient",
        "type": "address"
      },
      {
        "name": "exchangeWrapper",
        "type": "address"
      },
      {
        "name": "payoutInHeldToken",
        "type": "bool"
      },
      {
        "name": "order",
        "type": "bytes"
      }
    ],
    "name": "closePosition",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "requestedCloseAmount",
        "type": "uint256"
      },
      {
        "name": "payoutRecipient",
        "type": "address"
      }
    ],
    "name": "closePositionDirectly",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "requestedCloseAmount",
        "type": "uint256"
      },
      {
        "name": "payoutRecipient",
        "type": "address"
      }
    ],
    "name": "closeWithoutCounterparty",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "requiredDeposit",
        "type": "uint256"
      }
    ],
    "name": "marginCall",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "cancelMarginCall",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "forceRecoverCollateral",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "depositAmount",
        "type": "uint256"
      }
    ],
    "name": "depositCollateral",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addresses",
        "type": "address[9]"
      },
      {
        "name": "values256",
        "type": "uint256[7]"
      },
      {
        "name": "values32",
        "type": "uint32[4]"
      },
      {
        "name": "cancelAmount",
        "type": "uint256"
      }
    ],
    "name": "cancelLoanOffering",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "who",
        "type": "address"
      }
    ],
    "name": "transferLoan",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "name": "who",
        "type": "address"
      }
    ],
    "name": "transferPosition",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getVaultAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getProxyAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
const instance = new web3.eth.Contract(
  abi,
  '0xeec4c7032ecddc47182134933662f9b06b4fdc64'
);

export default instance;