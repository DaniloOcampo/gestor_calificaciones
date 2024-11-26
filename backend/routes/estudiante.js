const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const estudianteController = require("../controllers/estudiantecontroller");

router.get("/materias", authMiddleware, estudianteController.getMaterias);
router.get("/calificaciones", authMiddleware, estudianteController.getCalificaciones);

module.exports = router;
