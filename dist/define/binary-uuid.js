"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=BINARYUUID;var _binaryUUID=require("../utils/binaryUUID"),_binary=_interopRequireDefault(require("../types/binary"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function BINARYUUID(a={}){const b=a.allowNull||a.defaultValue?a.defaultValue:()=>(0,_binaryUUID.getBinaryUUID)();return{...a,type:(0,_binary.default)(16),defaultValue:b}}