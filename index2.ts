import express, { Application } from "express"
import mongoose from "mongoose"
import { mainApp } from "./mainApp"
import dotenv from "dotenv"
dotenv.config()

const port : number = 3256
const app: Application = express()

mainApp(app)

const server = app.listen(port, ()=>{
    console.log("Server");
    
})

process.on("uncaughtException", ()=>{
    console.log("A sever is crashing due to uncaughtException");
    
     process.exit(1)
})

process.on("unhandledRejection", ()=>{
    console.log("A sever is crashing due to unhandledRejection");

        server.close =(()=>{
            process.exit(1)
        }) 
})