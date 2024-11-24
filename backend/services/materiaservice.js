const Materia = require('../models/materia');

const MateriaService = {
    obtenerMaterias: async () => {
        return await Materia.getAll();
    },

    crearMateria: async (nombre, curso_id) => {
        if (!nombre || !curso_id) {
            throw new Error('El nombre y el curso_id son obligatorios');
        }
        return await Materia.create(nombre, curso_id);
    },

    actualizarMateria: async (id, nombre, curso_id) => {
        if (!id || !nombre || !curso_id) {
            throw new Error('El id, nombre y curso_id son obligatorios');
        }
        return await Materia.update(id, nombre, curso_id);
    },

    eliminarMateria: async (id) => {
        if (!id) {
            throw new Error('El id de la materia es obligatorio');
        }
        return await Materia.delete(id);
    },
};

module.exports = MateriaService;
