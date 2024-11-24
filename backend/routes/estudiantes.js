const express = require('express');
const estudiantesController = require('../controllers/estudiantescontroller');

const router = express.Router();

// Definir las rutas
router.get('/', estudiantesController.getEstudiantes); 
router.post('/', estudiantesController.createEstudiante); 
router.put('/:id', estudiantesController.updateEstudiante); 
router.delete('/:id', estudiantesController.deleteEstudiante); 

module.exports = router;

