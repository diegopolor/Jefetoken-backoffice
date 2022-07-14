"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsModel = void 0;
const mongoose_1 = require("mongoose");
const newsSchema = new mongoose_1.Schema({
    date: Date,
    title: String,
    content: String,
    author: String,
    URIimage: String,
    tags: String
});
exports.newsModel = (0, mongoose_1.model)('news', newsSchema);
