const Profesor = require('../models/profesor');

const ProfesorService = {
    obtenerProfesores: async () => {
        return await Profesor.getAll();
    },

    crearProfesor: async (nombre, email, contraseña) => {
        if (!nombre || !email || !contraseña) {
            throw new Error('El nombre, email y contraseña son obligatorios');
        }
        return await Profesor.create(nombre, email, contraseña);
    },

    actualizarProfesor: async (id, nombre, email, contraseña) => {
        if (!id || !nombre || !email || !contraseña) {
            throw new Error('El id, nombre, email y contraseña son obligatorios');
        }
        return await Profesor.update(id, nombre, email, contraseña);
    },

    eliminarProfesor: async (id) => {
        if (!id) {
            throw new Error('El id del profesor es obligatorio');
        }
        return await Profesor.delete(id);
    },
};

module.exports = ProfesorService;
