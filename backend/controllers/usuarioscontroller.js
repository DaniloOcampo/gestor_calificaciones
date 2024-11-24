const UsuarioService = require('../services/usuarioservice');

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioService.obtenerUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const { nombre, email, contraseña, rol } = req.body;
        const usuarioId = await UsuarioService.crearUsuario(nombre, email, contraseña, rol);
        res.status(201).json({ id: usuarioId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, contraseña, rol } = req.body;
        const affectedRows = await UsuarioService.actualizarUsuario(id, nombre, email, contraseña, rol);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await UsuarioService.eliminarUsuario(id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
