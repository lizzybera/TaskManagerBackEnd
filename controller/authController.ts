import express, {Request, Response} from "express"
import authPart from "../model/authModel"
import bcrypt from "bcrypt"

export const createAccount = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {userName,
            email,
            password,
            avatar} = req.body

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
            
        const user = await authPart.create({userName,
            email,
            password: hash,
            avatar})

        return res.status(201).json({
            message: "account created sucessfully",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "account cannot be created"
        })
    }
}

export const signInAccount = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {email,password} = req.body

        const user = await authPart.findOne({email})

        if (user){
            const passed = await bcrypt.compare(password, user.password!)
            if(passed){
                return res.status(201).json({
                    message:  `welcome back ${user.userName}`,
                    data: user._id
                })
            }else{
                return res.status(404).json({
                    message: "password is incorrect"
                })
            }
        }else{
            return res.status(404).json({
                message: "user not Found"
            })
        }

    } catch (error) {
        return res.status(404).json({
            message: "account cannot be created"
        })
    }
}

export const readuser = async (req: Request, res: Response): Promise<Response> =>{
    try {
        
        const user = await authPart.find().sort({ createdat: -1})

        return res.status(200).json({
            message: "user gotten sucessfully",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "user cannot be gotten sucessfully"
        })
    }
}

export const readOneUser = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {id} = req.params
        const user = await authPart.findById(id)

        return res.status(200).json({
            message: "one user gotten sucessfully",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "One user cannot be gotten sucessfully"
        })
    }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {id} = req.params
        const {userName, avatar} = req.body
        const user = await authPart.findByIdAndUpdate(
            id,
            {userName, avatar},
            {new: true},
            )

        return res.status(201).json({
            message: "user updated",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "user cannot be updated"
        })
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {id} = req.params
        const user = await authPart.findByIdAndDelete(id)

        return res.status(200).json({
            message: "user deleted sucessfully",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "Task cannot be deleted"
        })
    }
}