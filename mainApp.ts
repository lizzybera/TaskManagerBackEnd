import express, { Application } from "express";
import cors from 'cors'
import task from "./router/taskRouter"
import done from "./router/doneRouter"
import process from "./router/processRouter"
import auth from "./router/authRouter";

export const mainApp = (app: Application) => {
    app
    // middleWares
    .use(express.json())
    .use(cors())

    // routers
    .use("/api/v1/task", task)
    .use("/api/v1/done", done)
    .use("/api/v1/process", process)
    .use("/api/v1/auth", auth)
};
