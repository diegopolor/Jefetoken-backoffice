"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = exports.formatImage = void 0;
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
// Da formato a los nombres de las imagenes subidas y devuelve ubicación de la imagen a subir y el nombre
const formatImage = (images, pathImage) => {
    const idRandom = (0, uuid_1.v4)();
    const ImageExtension = images === null || images === void 0 ? void 0 : images.name.split('.')[1];
    const imageEncryptName = `${idRandom}.${String(ImageExtension)}`;
    // Toma la raiz de la ruta de imagenes
    const imagesPath = path_1.default.resolve(__dirname, pathImage);
    // Cocatena la ruta de la imagen con el nombre del misma para obtener la ubicación donde mover la imagen
    const imageMV = path_1.default.join(imagesPath, `${imageEncryptName}`);
    return ({
        imageMV,
        imageEncryptName
    });
};
exports.formatImage = formatImage;
// Sube la imagen al servidor y devuelve la ruta de la imagen en el modelo pasado como parametro
const uploadImage = (data, images) => {
    const imageFormat = (0, exports.formatImage)(images, '../files/images');
    // Mueve la imagen a la ruta retornada
    images.mv(imageFormat.imageMV);
    const URIimage = `/images/${String(imageFormat.imageEncryptName)}`;
    const dataSave = Object.assign(Object.assign({}, data), { URIimage });
    return dataSave;
};
exports.uploadImage = uploadImage;
