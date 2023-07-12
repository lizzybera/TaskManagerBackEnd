import express, {Request, Response} from "express"
import taskModel from "../model/taskModel"

export const createTask = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {task, priority, isComplete} = req.body
        const tasked = await taskModel.create({task, priority, isComplete})

        return res.status(201).json({
            message: "Task created sucessfully",
            data: tasked
        })

    } catch (error) {
        return res.status(404).json({
            message: "Task cannot be created"
        })
    }
}

export const getTask = async (req: Request, res: Response): Promise<Response> =>{
    try {
        
        const tasked = await taskModel.find()
        // .sort({ createdat: -1})

        return res.status(200).json({
            message: "Task gotten sucessfully",
            data: tasked
        })

    } catch (error) {
        return res.status(404).json({
            message: "Task cannot be gotten sucessfully"
        })
    }
}

export const getOneTask = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {id} = req.params
        const tasked = await taskModel.findById(id)

        return res.status(200).json({
            message: "one Task gotten sucessfully",
            data: tasked
        })

    } catch (error) {
        return res.status(404).json({
            message: "One Task cannot be gotten sucessfully"
        })
    }
}

export const updateTask = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {id} = req.params
        const tasked = await taskModel.findByIdAndUpdate(
            id,
            {isComplete: true},
            {new: true},
            )

        return res.status(201).json({
            message: "Task updated",
            data: tasked
        })

    } catch (error) {
        return res.status(404).json({
            message: "Task cannot be updated"
        })
    }
}

export const deleteTask = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {id} = req.params
        const tasked = await taskModel.findByIdAndDelete(id)

        return res.status(201).json({
            message: "Task deleted sucessfully",
            data: tasked
        })

    } catch (error) {
        return res.status(404).json({
            message: "Task cannot be deleted"
        })
    }
}