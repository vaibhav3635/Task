const express = require("express");
const router = express.Router();
const taskController=require("../controller/taskController");

router.post("/create",taskController.create);
router.get("/search",taskController.fetchAllTask);
router.get("/:taskId",taskController.fetchTaskById);
router.delete("/:taskId",taskController.deleteTask);
module.exports =router;