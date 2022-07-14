"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const userSchema = new mongoose_1.Schema({
    email: { type: String, unique: true },
    password: String,
    wallet: String,
    rol: String
});
userSchema.plugin(mongoose_unique_validator_1.default);
exports.usersModel = (0, mongoose_1.model)('Users', userSchema);
