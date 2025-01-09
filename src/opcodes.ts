export const standardOpcodesMetadata = {
  "00": { pops: 0, pushes: 0, name: 'STOP' },
  "01": { pops: 2, pushes: 1, name: 'ADD' },
  "02": { pops: 2, pushes: 1, name: 'MUL' },
  "03": { pops: 2, pushes: 1, name: 'SUB' },
  "04": { pops: 2, pushes: 1, name: 'DIV' },
  "05": { pops: 2, pushes: 1, name: 'SDIV' },
  "06": { pops: 2, pushes: 1, name: 'MOD' },
  "07": { pops: 2, pushes: 1, name: 'SMOD' },
  "08": { pops: 3, pushes: 1, name: 'ADDMOD' },
  "09": { pops: 3, pushes: 1, name: 'MULMOD' },
  "0a": { pops: 2, pushes: 1, name: 'EXP' },
  "0b": { pops: 2, pushes: 1, name: 'SIGNEXTEND' },
  "10": { pops: 2, pushes: 1, name: 'LT' },
  "11": { pops: 2, pushes: 1, name: 'GT' },
  "12": { pops: 2, pushes: 1, name: 'SLT' },
  "13": { pops: 2, pushes: 1, name: 'SGT' },
  "14": { pops: 2, pushes: 1, name: 'EQ' },
  "15": { pops: 1, pushes: 1, name: 'ISZERO' },
  "16": { pops: 2, pushes: 1, name: 'AND' },
  "17": { pops: 2, pushes: 1, name: 'OR' },
  "18": { pops: 2, pushes: 1, name: 'XOR' },
  "19": { pops: 1, pushes: 1, name: 'NOT' },
  "1a": { pops: 2, pushes: 1, name: 'BYTE' },
  "1b": { pops: 2, pushes: 1, name: 'SHL' },
  "1c": { pops: 2, pushes: 1, name: 'SHR' },
  "1d": { pops: 2, pushes: 1, name: 'SAR' },
  "20": { pops: 2, pushes: 1, name: 'KECCAK256' },
  "30": { pops: 0, pushes: 1, name: 'ADDRESS' },
  "31": { pops: 1, pushes: 1, name: 'BALANCE' },
  "32": { pops: 0, pushes: 1, name: 'ORIGIN' },
  "33": { pops: 0, pushes: 1, name: 'CALLER' },
  "34": { pops: 0, pushes: 1, name: 'CALLVALUE' },
  "35": { pops: 1, pushes: 1, name: 'CALLDATALOAD' },
  "36": { pops: 0, pushes: 1, name: 'CALLDATASIZE' },
  "37": { pops: 3, pushes: 0, name: 'CALLDATACOPY' },
  "38": { pops: 0, pushes: 1, name: 'CODESIZE' },
  "39": { pops: 3, pushes: 0, name: 'CODECOPY' },
  "3a": { pops: 0, pushes: 1, name: 'GASPRICE' },
  "3b": { pops: 1, pushes: 1, name: 'EXTCODESIZE' },
  "3c": { pops: 4, pushes: 0, name: 'EXTCODECOPY' },
  "3d": { pops: 0, pushes: 1, name: 'RETURNDATASIZE' },
  "3e": { pops: 3, pushes: 0, name: 'RETURNDATACOPY' },
  "3f": { pops: 1, pushes: 1, name: 'EXTCODEHASH' },
  "40": { pops: 1, pushes: 1, name: 'BLOCKHASH' },
  "41": { pops: 0, pushes: 1, name: 'COINBASE' },
  "42": { pops: 0, pushes: 1, name: 'TIMESTAMP' },
  "43": { pops: 0, pushes: 1, name: 'NUMBER' },
  "44": { pops: 0, pushes: 1, name: 'PREVRANDAO' },
  "45": { pops: 0, pushes: 1, name: 'GASLIMIT' },
  "46": { pops: 0, pushes: 1, name: 'CHAINID' },
  "47": { pops: 0, pushes: 1, name: 'SELFBALANCE' },
  "48": { pops: 0, pushes: 1, name: 'BASEFEE' },
  "49": { pops: 1, pushes: 1, name: 'BLOBHASH' },
  "4a": { pops: 0, pushes: 1, name: 'BLOBBASEFEE' },
  "50": { pops: 1, pushes: 0, name: 'POP' },
  "51": { pops: 1, pushes: 1, name: 'MLOAD' },
  "52": { pops: 2, pushes: 0, name: 'MSTORE' },
  "53": { pops: 2, pushes: 0, name: 'MSTORE8' },
  "54": { pops: 1, pushes: 1, name: 'SLOAD' },
  "55": { pops: 2, pushes: 0, name: 'SSTORE' },
  "56": { pops: 1, pushes: 0, name: 'JUMP' },
  "57": { pops: 2, pushes: 0, name: 'JUMPI' },
  "58": { pops: 0, pushes: 1, name: 'PC' },
  "59": { pops: 0, pushes: 1, name: 'MSIZE' },
  "5a": { pops: 0, pushes: 1, name: 'GAS' },
  "5b": { pops: 0, pushes: 0, name: 'JUMPDEST' },
  "5c": { pops: 1, pushes: 1, name: 'TLOAD' },
  "5d": { pops: 2, pushes: 0, name: 'TSTORE' },
  "5e": { pops: 3, pushes: 0, name: 'MCOPY' },
  "5f": { pops: 0, pushes: 1, name: 'PUSH0' },
  "60": { pops: 0, pushes: 1, name: 'PUSH1' },
  "61": { pops: 0, pushes: 1, name: 'PUSH2' },
  "62": { pops: 0, pushes: 1, name: 'PUSH3' },
  "63": { pops: 0, pushes: 1, name: 'PUSH4' },
  "64": { pops: 0, pushes: 1, name: 'PUSH5' },
  "65": { pops: 0, pushes: 1, name: 'PUSH6' },
  "66": { pops: 0, pushes: 1, name: 'PUSH7' },
  "67": { pops: 0, pushes: 1, name: 'PUSH8' },
  "68": { pops: 0, pushes: 1, name: 'PUSH9' },
  "69": { pops: 0, pushes: 1, name: 'PUSH10' },
  "6a": { pops: 0, pushes: 1, name: 'PUSH11' },
  "6b": { pops: 0, pushes: 1, name: 'PUSH12' },
  "6c": { pops: 0, pushes: 1, name: 'PUSH13' },
  "6d": { pops: 0, pushes: 1, name: 'PUSH14' },
  "6e": { pops: 0, pushes: 1, name: 'PUSH15' },
  "6f": { pops: 0, pushes: 1, name: 'PUSH16' },
  "70": { pops: 0, pushes: 1, name: 'PUSH17' },
  "71": { pops: 0, pushes: 1, name: 'PUSH18' },
  "72": { pops: 0, pushes: 1, name: 'PUSH19' },
  "73": { pops: 0, pushes: 1, name: 'PUSH20' },
  "74": { pops: 0, pushes: 1, name: 'PUSH21' },
  "75": { pops: 0, pushes: 1, name: 'PUSH22' },
  "76": { pops: 0, pushes: 1, name: 'PUSH23' },
  "77": { pops: 0, pushes: 1, name: 'PUSH24' },
  "78": { pops: 0, pushes: 1, name: 'PUSH25' },
  "79": { pops: 0, pushes: 1, name: 'PUSH26' },
  "7a": { pops: 0, pushes: 1, name: 'PUSH27' },
  "7b": { pops: 0, pushes: 1, name: 'PUSH28' },
  "7c": { pops: 0, pushes: 1, name: 'PUSH29' },
  "7d": { pops: 0, pushes: 1, name: 'PUSH30' },
  "7e": { pops: 0, pushes: 1, name: 'PUSH31' },
  "7f": { pops: 0, pushes: 1, name: 'PUSH32' },
  "80": { pops: 1, pushes: 2, name: 'DUP1' },
  "81": { pops: 1, pushes: 2, name: 'DUP2' },
  "82": { pops: 1, pushes: 2, name: 'DUP3' },
  "83": { pops: 1, pushes: 2, name: 'DUP4' },
  "84": { pops: 1, pushes: 2, name: 'DUP5' },
  "85": { pops: 1, pushes: 2, name: 'DUP6' },
  "86": { pops: 1, pushes: 2, name: 'DUP7' },
  "87": { pops: 1, pushes: 2, name: 'DUP8' },
  "88": { pops: 1, pushes: 2, name: 'DUP9' },
  "89": { pops: 1, pushes: 2, name: 'DUP10' },
  "8a": { pops: 1, pushes: 2, name: 'DUP11' },
  "8b": { pops: 1, pushes: 2, name: 'DUP12' },
  "8c": { pops: 1, pushes: 2, name: 'DUP13' },
  "8d": { pops: 1, pushes: 2, name: 'DUP14' },
  "8e": { pops: 1, pushes: 2, name: 'DUP15' },
  "8f": { pops: 1, pushes: 2, name: 'DUP16' },
  "90": { pops: 0, pushes: 0, name: 'SWAP1' },
  "91": { pops: 0, pushes: 0, name: 'SWAP2' },
  "92": { pops: 0, pushes: 0, name: 'SWAP3' },
  "93": { pops: 0, pushes: 0, name: 'SWAP4' },
  "94": { pops: 0, pushes: 0, name: 'SWAP5' },
  "95": { pops: 0, pushes: 0, name: 'SWAP6' },
  "96": { pops: 0, pushes: 0, name: 'SWAP7' },
  "97": { pops: 0, pushes: 0, name: 'SWAP8' },
  "98": { pops: 0, pushes: 0, name: 'SWAP9' },
  "99": { pops: 0, pushes: 0, name: 'SWAP10' },
  "9a": { pops: 0, pushes: 0, name: 'SWAP11' },
  "9b": { pops: 0, pushes: 0, name: 'SWAP12' },
  "9c": { pops: 0, pushes: 0, name: 'SWAP13' },
  "9d": { pops: 0, pushes: 0, name: 'SWAP14' },
  "9e": { pops: 0, pushes: 0, name: 'SWAP15' },
  "9f": { pops: 0, pushes: 0, name: 'SWAP16' },
  "a0": { pops: 2, pushes: 0, name: 'LOG0' },
  "a1": { pops: 3, pushes: 0, name: 'LOG1' },
  "a2": { pops: 4, pushes: 0, name: 'LOG2' },
  "a3": { pops: 5, pushes: 0, name: 'LOG3' },
  "a4": { pops: 6, pushes: 0, name: 'LOG4' },
  "f0": { pops: 3, pushes: 1, name: 'CREATE' },
  "f1": { pops: 7, pushes: 1, name: 'CALL' },
  "f2": { pops: 7, pushes: 1, name: 'CALLCODE' },
  "f3": { pops: 2, pushes: 0, name: 'RETURN' },
  "f4": { pops: 6, pushes: 1, name: 'DELEGATECALL' },
  "f5": { pops: 4, pushes: 1, name: 'CREATE2' },
  "fa": { pops: 6, pushes: 1, name: 'STATICCALL' },
  "fd": { pops: 2, pushes: 0, name: 'REVERT' },
  "fe": { pops: 0, pushes: 0, name: 'INVALID' },
  "ff": { pops: 1, pushes: 0, name: 'SELFDESTRUCT' },
}
