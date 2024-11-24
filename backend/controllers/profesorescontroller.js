const ProfesorService = require('../services/profesorservice');

exports.getProfesores = async (req, res) => {
    try {
        const profesores = await ProfesorService.obtenerProfesores();
        res.status(200).json(profesores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProfesor = async (req, res) => {
    try {
        const { nombre, email, contraseña } = req.body;
        const profesorId = await ProfesorService.crearProfesor(nombre, email, contraseña);
        res.status(201).json({ id: profesorId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateProfesor = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, contraseña } = req.body;
        const affectedRows = await ProfesorService.actualizarProfesor(id, nombre, email, contraseña);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        res.status(200).json({ message: 'Profesor actualizado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProfesor = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await ProfesorService.eliminarProfesor(id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        res.status(200).json({ message: 'Profesor eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
