"use strict";
//Configurations file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var _a = process.env, PORT = _a.PORT, NODE_env = _a.NODE_env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_PORT = _a.POSTGRES_PORT, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD;
exports["default"] = {
    env: NODE_env,
    port: PORT,
    host: POSTGRES_HOST,
    dbport: POSTGRES_PORT,
    database: NODE_env === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
};
