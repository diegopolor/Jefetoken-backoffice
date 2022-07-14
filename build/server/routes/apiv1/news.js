"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsRouters = void 0;
const express_1 = require("express");
const news_1 = require("../../controllers/news");
const promiseEnd_1 = require("../../utils/promiseEnd");
const prueba_1 = require("../../middlewares/prueba");
exports.newsRouters = (0, express_1.Router)();
// Guardar noticias
exports.newsRouters.post('/', (req, res) => {
    var _a;
    const file = (_a = req.files) === null || _a === void 0 ? void 0 : _a.images;
    (0, news_1.saveNews)(req.body, file)
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
// Actualizar Noticias
exports.newsRouters.put('/:id', (req, res) => {
    var _a;
    const file = (_a = req.files) === null || _a === void 0 ? void 0 : _a.images;
    (0, news_1.updateNews)(req.params.id, req.body, file)
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
exports.newsRouters.get('/', prueba_1.pruebaMiddleware, (_req, res) => {
    (0, news_1.listAllNews)()
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
exports.newsRouters.post('/filter', (req, res) => {
    console.log(req.body);
    (0, news_1.listFilteredNews)(req.body)
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
exports.newsRouters.delete('/:id', (req, res) => {
    (0, news_1.deleteNews)(req.params.id)
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
