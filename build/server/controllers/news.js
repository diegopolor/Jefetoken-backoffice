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
exports.deleteNews = exports.listFilteredNews = exports.listAllNews = exports.updateNews = exports.saveNews = void 0;
const crud_1 = require("../utils/crud");
const news_1 = require("../models/news");
const responseHandler_1 = require("../utils/responseHandler");
const utilsImage_1 = require("../utils/utilsImage");
const dataResponseHandler_1 = require("../utils/dataResponseHandler");
const crudErrorHandler_1 = require("../utils/crudErrorHandler");
const saveNews = (data, images) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataSave = (0, utilsImage_1.uploadImage)(data, images);
        yield (0, crud_1.saveData)(dataSave, news_1.newsModel);
        return (0, responseHandler_1.responseHandler)(201, 'Datos guardados con exito');
    }
    catch (e) {
        return (0, crudErrorHandler_1.saveErrorHandler)(e);
    }
});
exports.saveNews = saveNews;
const updateNews = (id, data, images) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataSave = (0, utilsImage_1.uploadImage)(data, images);
        yield (0, crud_1.updateData)(id, dataSave, news_1.newsModel);
        return (0, responseHandler_1.responseHandler)(200, 'Datos actualizados con exito');
    }
    catch (e) {
        return (0, crudErrorHandler_1.updateErrorHandler)(e);
    }
});
exports.updateNews = updateNews;
const listAllNews = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, crud_1.listData)({}, news_1.newsModel);
    return (0, dataResponseHandler_1.dataFoundQuery)(data);
});
exports.listAllNews = listAllNews;
const listFilteredNews = (dateFilter = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, crud_1.listData)(dateFilter, news_1.newsModel);
        return (0, dataResponseHandler_1.dataFoundQuery)(data);
    }
    catch (e) {
        return (0, crudErrorHandler_1.listErrorHandler)(e);
    }
});
exports.listFilteredNews = listFilteredNews;
const deleteNews = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield (0, crud_1.deleteData)(id, news_1.newsModel);
        return (0, dataResponseHandler_1.dataEliminatedQuery)(deleted);
    }
    catch (e) {
        return (0, crudErrorHandler_1.deleteErrorHandler)(e);
    }
});
exports.deleteNews = deleteNews;
