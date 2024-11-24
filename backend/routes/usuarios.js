const express = require('express');
const usuariosController = require('../controllers/usuarioscontroller');

const router = express.Router();

// Definir las rutas
router.get('/', usuariosController.getUsuarios);
router.post('/', usuariosController.createUsuario);
router.put('/:id', usuariosController.updateUsuario);
router.delete('/:id', usuariosController.deleteUsuario);

module.exports = router;
