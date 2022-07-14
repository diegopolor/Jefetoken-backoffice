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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.listFilteredUsers = exports.listAllUsers = exports.updateUser = exports.saveUser = void 0;
const users_1 = require("../models/users");
const crud_1 = require("../utils/crud");
const dataResponseHandler_1 = require("../utils/dataResponseHandler");
const responseHandler_1 = require("../utils/responseHandler");
const passEncrypt_1 = require("../utils/passEncrypt");
// Manejador de errores de crud
const crudErrorHandler_1 = require("../utils/crudErrorHandler");
const saveUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataSave = yield (0, passEncrypt_1.passEncrypt)(data);
        yield (0, crud_1.saveData)(dataSave, users_1.usersModel);
        return (0, responseHandler_1.responseHandler)(201, { sucess: 'Datos guardados con exito' });
    }
    catch (e) {
        return (0, crudErrorHandler_1.saveErrorHandler)(e, 'email');
    }
});
exports.saveUser = saveUser;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataSave = yield (0, passEncrypt_1.passEncrypt)(data);
        yield (0, crud_1.updateData)(id, dataSave, users_1.usersModel);
        return (0, responseHandler_1.responseHandler)(200, { sucess: 'Datos actualizados con exito' });
    }
    catch (e) {
        return (0, crudErrorHandler_1.updateErrorHandler)(e);
    }
});
exports.updateUser = updateUser;
const listAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, crud_1.listData)({}, users_1.usersModel);
    return (0, dataResponseHandler_1.dataFoundQuery)(data);
});
exports.listAllUsers = listAllUsers;
const listFilteredUsers = (filter = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, crud_1.listData)(filter, users_1.usersModel);
        return (0, dataResponseHandler_1.dataFoundQuery)(data);
    }
    catch (e) {
        return (0, crudErrorHandler_1.listErrorHandler)(e);
    }
});
exports.listFilteredUsers = listFilteredUsers;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield (0, crud_1.deleteData)(id, users_1.usersModel);
        return (0, dataResponseHandler_1.dataEliminatedQuery)(deleted);
    }
    catch (e) {
        return (0, crudErrorHandler_1.deleteErrorHandler)(e);
    }
});
exports.deleteUser = deleteUser;
