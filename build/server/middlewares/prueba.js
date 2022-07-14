"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pruebaMiddleware = void 0;
const pruebaMiddleware = (req, _res, next) => {
    const AuthValue = req.header('Authentication');
    const token = AuthValue.split(' ')[1];
    console.log(token);
    next();
};
exports.pruebaMiddleware = pruebaMiddleware;
