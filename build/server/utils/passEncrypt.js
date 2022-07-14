"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passEncrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
// recibe el pass y devuelve el pass encriptado dentro del modelo pasado por parametro
const passEncrypt = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const password = yield bcrypt_1.default.hash(data.password, 10);
    const dataSave = Object.assign(Object.assign({}, data), { password });
    return dataSave;
});
exports.passEncrypt = passEncrypt;
