"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteErrorHandler = exports.listErrorHandler = exports.updateErrorHandler = exports.saveErrorHandler = void 0;
const responseHandler_1 = require("./responseHandler");
const saveErrorHandler = (e, uniqueName = ' ') => {
    if (String(e).includes('unique')) {
        return (0, responseHandler_1.responseHandler)(400, { error: `El valor del campo "${uniqueName}" ya se encuentra registrado.` });
    }
    else if (e._message.includes('validation failed') === true) {
        return (0, responseHandler_1.responseHandler)(400, { error: 'Datos enviados no validos, verifique la información.' });
    }
};
exports.saveErrorHandler = saveErrorHandler;
const updateErrorHandler = (e) => {
    // Si da error en el campo _id
    if (e.path.includes('_id') === true) {
        return (0, responseHandler_1.responseHandler)(400, { error: 'El id no coincide con un registro existente.' });
    }
    else if (e.path.includes('_id') !== true) { // si da error en un campo diferente
        return (0, responseHandler_1.responseHandler)(400, { error: `El valor del campo "${String(e.path)}" es incorrecto` });
    }
};
exports.updateErrorHandler = updateErrorHandler;
const listErrorHandler = (e) => {
    // Si da error en el campo _id
    if (e.path.includes('_id') === true) {
        return (0, responseHandler_1.responseHandler)(404, { error: 'No se encontraron datos relacionados a la id' });
    }
};
exports.listErrorHandler = listErrorHandler;
const deleteErrorHandler = (e) => {
    if (e.path.includes('_id') === true) { // si se envia en la petición una key erronea
        return (0, responseHandler_1.responseHandler)(404, { error: `No se encuentran registros con la id:  ${String(JSON.stringify(e.value))}` });
    }
};
exports.deleteErrorHandler = deleteErrorHandler;
