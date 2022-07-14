"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutesV1 = void 0;
const express_1 = require("express");
const users_1 = require("./users");
const news_1 = require("./news");
const apiRoutesV1 = (app) => {
    const Route = (0, express_1.Router)();
    Route.use('/users', users_1.userRouters);
    Route.use('/news', news_1.newsRouters);
    app.use('/api/v1', Route);
};
exports.apiRoutesV1 = apiRoutesV1;
