const Curso = require('../models/curso');

const CursoService = {
    obtenerCursos: async () => {
        return await Curso.getAll();
    },

    crearCurso: async (nombre) => {
        if (!nombre) {
            throw new Error('El nombre del curso es obligatorio');
        }
        return await Curso.create(nombre);
    },

    actualizarCurso: async (id, nombre) => {
        if (!id || !nombre) {
            throw new Error('El id y el nombre del curso son obligatorios');
        }
        return await Curso.update(id, nombre);
    },

    eliminarCurso: async (id) => {
        if (!id) {
            throw new Error('El id del curso es obligatorio');
        }
        return await Curso.delete(id);
    },
};

module.exports = CursoService;
