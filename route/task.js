const express = require("express");
const router = express.Router();

const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

router.route("/").get(getAllTask).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
