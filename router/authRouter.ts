import express, { Router } from "express"
import { createAccount, deleteUser, readOneUser, readuser, signInAccount, updateUser } from "../controller/authController"

const router = Router()


// to make ur routes have the same url but differnt crud operations
router.route("/").get(readuser)
router.route("/account").post(createAccount)
router.route("/sign-in").post(signInAccount)

router.route("/readOne/:id").get(readOneUser)
router.route("/update/:id").patch(updateUser)
router.route("/delete/:id").delete(deleteUser)

export default router