const express = require('express');
const calificacionesController = require('../controllers/calificacionesController');

const router = express.Router();

// Rutas para las calificaciones
router.get('/', calificacionesController.getCalificaciones);
router.get('/estudiante/:estudiante_id', calificacionesController.getCalificacionesPorEstudiante);
router.post('/', calificacionesController.createCalificacion);
router.put('/:id', calificacionesController.updateCalificacion);
router.delete('/:id', calificacionesController.deleteCalificacion);

module.exports = router;
