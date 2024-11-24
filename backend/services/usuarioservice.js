const Usuario = require('../models/usuario');

const UsuarioService = {
    obtenerUsuarios: async () => {
        return await Usuario.getAll();
    },

    crearUsuario: async (nombre, email, contraseña, rol) => {
        if (!nombre || !email || !contraseña || !rol) {
            throw new Error('Todos los campos son obligatorios');
        }
        return await Usuario.create(nombre, email, contraseña, rol);
    },

    actualizarUsuario: async (id, nombre, email, contraseña, rol) => {
        if (!id || !nombre || !email || !contraseña || !rol) {
            throw new Error('El id y todos los campos son obligatorios');
        }
        return await Usuario.update(id, nombre, email, contraseña, rol);
    },

    eliminarUsuario: async (id) => {
        if (!id) {
            throw new Error('El id del usuario es obligatorio');
        }
        return await Usuario.delete(id);
    },
};

module.exports = UsuarioService;
