const express = require('express');
const profesoresController = require('../controllers/profesorescontroller');

const router = express.Router();

// Definir las rutas
router.get('/', profesoresController.getProfesores);
router.post('/', profesoresController.createProfesor);
router.put('/:id', profesoresController.updateProfesor);
router.delete('/:id', profesoresController.deleteProfesor);

module.exports = router;

