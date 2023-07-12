import express, { Router } from "express"
import { createTask, deleteTask, getOneTask, getTask, updateTask } from "../controller/processController"

const router = Router()


// to make ur routes have the same url but differnt crud operations
router.route("/").get(getTask)
                .post(createTask)

router.route("/:id").get(getOneTask)
                .patch(updateTask)
                .delete(deleteTask)

export default router