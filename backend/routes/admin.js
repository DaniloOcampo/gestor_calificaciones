const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminController = require("../controllers/admincontroller");

router.get("/users", authMiddleware, adminController.getUsers);
router.get("/courses", authMiddleware, adminController.getCourses);
router.get("/subjects", authMiddleware, adminController.getSubjects);

module.exports = router;
