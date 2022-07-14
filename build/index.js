"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
require("colors");
const environments_1 = require("./config/environments");
const mongodb_1 = require("./config/mongodb");
const apiv1_1 = require("./server/routes/apiv1");
const images_1 = require("./server/routes/images");
const app = (0, express_1.default)();
const PORT = environments_1.env.PORT !== undefined ? environments_1.env.PORT : 3000;
(0, mongodb_1.DBConnect)();
// middlewares
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// middelware para recibir archivos en la petición
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
// ||--------- Rutas del servidor ---------||
// Añade el frontend al servidor en la ruta '/'
app.use(express_1.default.static(path_1.default.resolve(__dirname, './public')));
// Rutas de la API
(0, apiv1_1.apiRoutesV1)(app);
// Ruta para mostrar imagenes del servidor
app.use(images_1.imagesRoute);
app.use((_req, res) => {
    res.send('Ruta no disponible 404');
    res.status(404).end();
});
app.listen(PORT, () => {
    console.clear();
    console.log('==============================='.green);
    console.log(` Server stared in port ${String(PORT)}`.green);
    console.log('==============================='.green);
});
