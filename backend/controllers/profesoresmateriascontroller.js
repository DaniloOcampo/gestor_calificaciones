const profesoresMateriasService = require('../services/profesormateriaservice');

// Obtener todas las asignaciones
exports.getProfesoresMaterias = async (req, res) => {
    try {
        const asignaciones = await profesoresMateriasService.getProfesoresMaterias();
        res.status(200).json(asignaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva asignación
exports.createProfesorMateria = async (req, res) => {
    const { profesor_id, materia_id } = req.body;

    try {
        const asignacionId = await profesoresMateriasService.createProfesorMateria(profesor_id, materia_id);
        res.status(201).json({ success: true, message: 'Asignación creada exitosamente', id: asignacionId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una asignación
exports.deleteProfesorMateria = async (req, res) => {
    const { id } = req.params;

    try {
        await profesoresMateriasService.deleteProfesorMateria(id);
        res.status(200).json({ success: true, message: 'Asignación eliminada exitosamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
