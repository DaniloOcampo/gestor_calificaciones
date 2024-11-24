const express = require('express');
const profesoresMateriasController = require('../controllers/profesoresmateriascontroller');

const router = express.Router();

// Endpoint para obtener todas las asignaciones de profesores a materias
router.get('/', profesoresMateriasController.getProfesoresMaterias);

// Endpoint para crear una nueva asignación
router.post('/', profesoresMateriasController.createProfesorMateria);

// Endpoint para eliminar una asignación
router.delete('/:id', profesoresMateriasController.deleteProfesorMateria);

module.exports = router;
