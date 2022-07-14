"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataEliminatedQuery = exports.dataFoundQuery = void 0;
const responseHandler_1 = require("./responseHandler");
const dataFoundQuery = (data) => {
    if (data.length !== 0)
        return (0, responseHandler_1.responseHandler)(200, data);
    else
        return (0, responseHandler_1.responseHandler)(404, { error: 'No se encontraron datos en esta consulta' });
};
exports.dataFoundQuery = dataFoundQuery;
const dataEliminatedQuery = (data) => {
    if (data !== null)
        return (0, responseHandler_1.responseHandler)(204, ' ');
    else
        return (0, responseHandler_1.responseHandler)(404, { error: 'No se encontró el elemento a eliminar' });
};
exports.dataEliminatedQuery = dataEliminatedQuery;
