const express = require('express');
const cursosController = require('../controllers/cursoscontroller');

const router = express.Router();

// Definir las rutas
router.get('/', cursosController.getCursos);
router.post('/', cursosController.createCurso);
router.put('/:id', cursosController.updateCurso);
router.delete('/:id', cursosController.deleteCurso);

module.exports = router;

module.exports = router;
