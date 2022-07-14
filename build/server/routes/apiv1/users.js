"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouters = void 0;
const express_1 = require("express");
const users_1 = require("../../controllers/users");
const promiseEnd_1 = require("../../utils/promiseEnd");
exports.userRouters = (0, express_1.Router)();
// Guardar usuarios
exports.userRouters.post('/', (req, res) => {
    (0, users_1.saveUser)(req.body)
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
// Actualizar usuarios
exports.userRouters.put('/:id', (req, res) => {
    (0, users_1.updateUser)(req.params.id, req.body)
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
// Listar usuarios
exports.userRouters.get('/', (_req, res) => {
    (0, users_1.listAllUsers)()
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
// Listar usuarios filtrados
exports.userRouters.post('/filter', (req, res) => {
    (0, users_1.listFilteredUsers)(req.body)
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
// eliminar usuarios
exports.userRouters.delete('/:id', (req, res) => {
    (0, users_1.deleteUser)(req.params.id)
        .then((response) => {
        res.status(response.code).json(response.message).end();
    }, promiseEnd_1.promiseEnd);
});
