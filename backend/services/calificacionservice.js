const Calificacion = require('../models/calificacion');

const CalificacionService = {
    // Obtener todas las calificaciones
    obtenerCalificaciones: async () => {
        return await Calificacion.getAll();
    },

    // Obtener calificaciones por estudiante
    obtenerCalificacionesPorEstudiante: async (estudiante_id) => {
        if (!estudiante_id) {
            throw new Error('El estudiante_id es obligatorio');
        }
        return await Calificacion.getByEstudianteId(estudiante_id);
    },

    // Crear una nueva calificación
    crearCalificacion: async (estudiante_id, materia_id, periodo, calificacion) => {
        if (!estudiante_id || !materia_id || !periodo || calificacion == null) {
            throw new Error('Todos los campos son obligatorios');
        }
        return await Calificacion.create(estudiante_id, materia_id, periodo, calificacion);
    },

    // Actualizar una calificación
    actualizarCalificacion: async (id, calificacion) => {
        if (!id || calificacion == null) {
            throw new Error('El id y la calificación son obligatorios');
        }
        return await Calificacion.update(id, calificacion);
    },

    // Eliminar una calificación
    eliminarCalificacion: async (id) => {
        if (!id) {
            throw new Error('El id de la calificación es obligatorio');
        }
        return await Calificacion.delete(id);
    },
};

module.exports = CalificacionService;
