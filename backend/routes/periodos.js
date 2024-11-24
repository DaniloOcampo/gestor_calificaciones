const express = require('express');
const periodosController = require('../controllers/periodoscontroller');

const router = express.Router();

// Rutas para los periodos
router.get('/', periodosController.getPeriodos);
router.post('/', periodosController.createPeriodo);
router.put('/:id', periodosController.updatePeriodo);
router.delete('/:id', periodosController.deletePeriodo);

module.exports = router;
