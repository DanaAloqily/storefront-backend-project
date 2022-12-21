"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var user_routes = express_1["default"].Router();
user_routes.get('./', function (req, res) {
    res.json({
        message: 'Hello World from users'
    });
});
//routes.post(./ , );
//...
exports["default"] = user_routes;
