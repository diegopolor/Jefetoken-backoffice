"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCloseConnection = exports.DBConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const environments_1 = require("./environments");
const URI = String(environments_1.env.DBHOST);
const DBConnect = () => {
    mongoose_1.default.connect(URI)
        .then(() => {
        console.log('\nConectado a la base de datos ✔\n'
            .yellow);
    }).catch((err) => {
        console.log('No se ha podido conectar a la base de datos ❌'
            .red);
        console.log(err);
    });
};
exports.DBConnect = DBConnect;
const DBCloseConnection = () => {
    mongoose_1.default.connection.close().then(() => {
        console.log('Desconexión exitosa.');
    }).catch((err) => {
        console.log('No se ha podido desconectar de la base de datos.');
        console.log(err);
    });
};
exports.DBCloseConnection = DBCloseConnection;
