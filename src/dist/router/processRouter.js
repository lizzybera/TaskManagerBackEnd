"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const processController_1 = require("../controller/processController");
const router = (0, express_1.Router)();
// to make ur routes have the same url but differnt crud operations
router.route("/").get(processController_1.getTask)
    .post(processController_1.createTask);
router.route("/:id").get(processController_1.getOneTask)
    .patch(processController_1.updateTask)
    .delete(processController_1.deleteTask);
exports.default = router;
