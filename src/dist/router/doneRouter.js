"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doneController_1 = require("../controller/doneController");
const router = (0, express_1.Router)();
// to make ur routes have the same url but differnt crud operations
router.route("/").get(doneController_1.getTask)
    .post(doneController_1.createTask);
router.route("/:id").get(doneController_1.getOneTask)
    .patch(doneController_1.updateTask)
    .delete(doneController_1.deleteTask);
exports.default = router;
