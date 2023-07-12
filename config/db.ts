import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const mongooseString : string = process.env.DB_PORTI!

export const dbConnect = ()=>{
    mongoose.connect(mongooseString).then(()=>{
        console.log("connected");
        
    })
}