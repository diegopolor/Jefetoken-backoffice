"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const UsedEnvironment = dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, `../environments/.env.${String(process.env.NODE_ENV)}`)
});
exports.env = {
    PORT: (_a = UsedEnvironment.parsed) === null || _a === void 0 ? void 0 : _a.PORT,
    DBHOST: (_b = UsedEnvironment.parsed) === null || _b === void 0 ? void 0 : _b.DBHOST
};
