const CalificacionService = require('../services/calificacionservice');

// Obtener todas las calificaciones
exports.getCalificaciones = async (req, res) => {
    try {
        const calificaciones = await CalificacionService.obtenerCalificaciones();
        res.status(200).json(calificaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener calificaciones por estudiante
exports.getCalificacionesPorEstudiante = async (req, res) => {
    try {
        const { estudiante_id } = req.params;
        const calificaciones = await CalificacionService.obtenerCalificacionesPorEstudiante(estudiante_id);
        res.status(200).json(calificaciones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Crear una nueva calificación
exports.createCalificacion = async (req, res) => {
    try {
        const { estudiante_id, materia_id, periodo, calificacion } = req.body;
        const calificacionId = await CalificacionService.crearCalificacion(estudiante_id, materia_id, periodo, calificacion);
        res.status(201).json({ id: calificacionId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una calificación
exports.updateCalificacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { calificacion } = req.body;
        const affectedRows = await CalificacionService.actualizarCalificacion(id, calificacion);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Calificación no encontrada' });
        }

        res.status(200).json({ message: 'Calificación actualizada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una calificación
exports.deleteCalificacion = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await CalificacionService.eliminarCalificacion(id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Calificación no encontrada' });
        }

        res.status(200).json({ message: 'Calificación eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
