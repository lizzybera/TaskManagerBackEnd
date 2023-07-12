"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controller/authController");
const router = (0, express_1.Router)();
// to make ur routes have the same url but differnt crud operations
router.route("/").get(authController_1.readuser);
router.route("/account").post(authController_1.createAccount);
router.route("/sign-in").post(authController_1.signInAccount);
router.route("/readOne/:id").get(authController_1.readOneUser);
router.route("/update/:id").patch(authController_1.updateUser);
router.route("/delete/:id").delete(authController_1.deleteUser);
exports.default = router;
