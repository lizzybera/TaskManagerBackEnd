"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
const db_1 = require("./config/db");
// For Security
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const realPort = parseFloat(process.env.APPLICATION_PORT);
const port = realPort;
const app = (0, express_1.default)();
// Modular Utility
(0, mainApp_1.mainApp)(app);
// putting the mongoose conection inside  server
const server = app.listen(port, () => {
    console.log("");
    (0, db_1.dbConnect)();
    console.log("");
    console.log("server is running");
});
process.on("uncaughtException", (error) => {
    console.log("server is shutting down due to an uncaughtException");
    console.log(error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("server is shutting down due to an unhandledRejection");
    console.log(reason);
    server.close(() => {
        process.exit(1);
    });
});
