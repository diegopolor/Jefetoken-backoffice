"use strict";
// import { responseErrorHandler } from '../utils/ResponseErrorHandler'
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
exports.deleteData = exports.updateData = exports.listData = exports.saveData = void 0;
const saveData = (data, Modelo) => __awaiter(void 0, void 0, void 0, function* () {
    const dataModel = new Modelo(data);
    const saved = dataModel.save();
    return saved;
});
exports.saveData = saveData;
const listData = (filter = {}, model) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield model.find(filter);
    return data;
});
exports.listData = listData;
const updateData = (id, data, model) => __awaiter(void 0, void 0, void 0, function* () {
    const update = yield model.findByIdAndUpdate({ _id: id }, data);
    return update;
});
exports.updateData = updateData;
const deleteData = (id, model) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteD = yield model.findByIdAndDelete(id);
    return deleteD;
});
exports.deleteData = deleteData;
