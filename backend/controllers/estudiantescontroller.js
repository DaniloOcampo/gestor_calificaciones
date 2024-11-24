const EstudianteService = require('../services/estudianteservice');

// Obtener todos los estudiantes
exports.getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await EstudianteService.obtenerEstudiantes();
        res.status(200).json(estudiantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo estudiante
exports.createEstudiante = async (req, res) => {
    try {
        const { usuario_id, curso_id } = req.body;
        const estudianteId = await EstudianteService.crearEstudiante(usuario_id, curso_id);
        res.status(201).json({ id: estudianteId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un estudiante
exports.updateEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario_id, curso_id } = req.body;
        const affectedRows = await EstudianteService.actualizarEstudiante(id, usuario_id, curso_id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }
        res.status(200).json({ message: 'Estudiante actualizado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un estudiante
exports.deleteEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await EstudianteService.eliminarEstudiante(id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }
        res.status(200).json({ message: 'Estudiante eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
