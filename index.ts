import express, { Application } from "express"
import { mainApp } from "./mainApp"
import mongoose from "mongoose"
import { dbConnect } from "./config/db"
// For Security
import dotenv from "dotenv"
dotenv.config()

const realPort = parseFloat(process.env.APPLICATION_PORT!)

const port: number = realPort
const app: Application = express()

// Modular Utility
mainApp(app)


// putting the mongoose conection inside  server
const server = app.listen(port, ()=>{
    console.log("");

    dbConnect() 
    
    console.log("");
    console.log("server is running");
})


process.on("uncaughtException", (error: any)=>{
    console.log("server is shutting down due to an uncaughtException");

    console.log(error);

    process.exit(1)
})

process.on("unhandledRejection", (reason: any)=>{
    console.log("server is shutting down due to an unhandledRejection");

    console.log(reason);

   server.close(()=>{
    process.exit(1)
   })
})