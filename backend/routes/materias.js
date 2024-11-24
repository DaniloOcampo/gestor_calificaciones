const express = require('express');
const materiasController = require('../controllers/materiascontroller');

const router = express.Router();

// Definir las rutas
router.get('/', materiasController.getMaterias);
router.post('/', materiasController.createMateria);
router.put('/:id', materiasController.updateMateria);
router.delete('/:id', materiasController.deleteMateria);

module.exports = router;

