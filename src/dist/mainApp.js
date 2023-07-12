"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRouter_1 = __importDefault(require("./router/taskRouter"));
const doneRouter_1 = __importDefault(require("./router/doneRouter"));
const processRouter_1 = __importDefault(require("./router/processRouter"));
const authRouter_1 = __importDefault(require("./router/authRouter"));
const mainApp = (app) => {
    app
        // middleWares
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        // routers
        .use("/api/v1/task", taskRouter_1.default)
        .use("/api/v1/done", doneRouter_1.default)
        .use("/api/v1/process", processRouter_1.default)
        .use("/api/v1/auth", authRouter_1.default);
};
exports.mainApp = mainApp;
