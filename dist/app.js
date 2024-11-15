"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const adminController_1 = __importDefault(require("./controllers/adminController"));
const usersController_1 = __importDefault(require("./controllers/usersController"));
const candidatesController_1 = __importDefault(require("./controllers/candidatesController"));
const votesController_1 = __importDefault(require("./controllers/votesController"));
const db_1 = require("./config/db");
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 2000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, db_1.connectToMongo)();
app.use("/api/users", usersController_1.default);
app.use("/api/admin", adminController_1.default);
app.use("/api/votes", votesController_1.default);
app.use("/api/candidates", candidatesController_1.default);
app.listen(PORT, () => {
    console.log(`server is visit "http://localhost:${PORT}"`);
});
