"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./middleware/config"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
var PORT = config_1["default"].port || 3000;
/* app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(PORT, function () {
    console.log(`starting app on: ${address}`)
}) */
app.use('./api', routes_1["default"]);
exports["default"] = app;
