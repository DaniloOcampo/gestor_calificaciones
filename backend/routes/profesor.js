const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const profesorController = require("../controllers/profesorcontroller");

router.get("/materias", authMiddleware, profesorController.getMaterias);
router.get("/materias/:materiaId/estudiantes", authMiddleware, profesorController.getEstudiantes);
router.put("/materias/:materiaId/estudiantes/:estudianteId/nota", authMiddleware, profesorController.updateNota);

module.exports = router;
