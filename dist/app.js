"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const port = process.env.PORT || 2000;
const app = (0, express_1.default)();
app.listen(port, () => {
    console.log(`server is visit "http://localhost:${port}"`);
});
