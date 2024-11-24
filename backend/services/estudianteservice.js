const Estudiante = require('../models/estudiante');

const EstudianteService = {
    // Obtener todos los estudiantes
    obtenerEstudiantes: async () => {
        return await Estudiante.getAll();
    },

    // Crear un nuevo estudiante
    crearEstudiante: async (usuario_id, curso_id) => {
        if (!usuario_id || !curso_id) {
            throw new Error('El usuario_id y curso_id son obligatorios');
        }
        return await Estudiante.create(usuario_id, curso_id);
    },

    // Actualizar un estudiante
    actualizarEstudiante: async (id, usuario_id, curso_id) => {
        if (!id || !usuario_id || !curso_id) {
            throw new Error('El id, usuario_id y curso_id son obligatorios');
        }
        return await Estudiante.update(id, usuario_id, curso_id);
    },

    // Eliminar un estudiante
    eliminarEstudiante: async (id) => {
        if (!id) {
            throw new Error('El id es obligatorio');
        }
        return await Estudiante.delete(id);
    },
};

module.exports = EstudianteService;
