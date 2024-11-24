const MateriaService = require('../services/materiaservice');

exports.getMaterias = async (req, res) => {
    try {
        const materias = await MateriaService.obtenerMaterias();
        res.status(200).json(materias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createMateria = async (req, res) => {
    try {
        const { nombre, curso_id } = req.body;
        const materiaId = await MateriaService.crearMateria(nombre, curso_id);
        res.status(201).json({ id: materiaId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateMateria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, curso_id } = req.body;
        const affectedRows = await MateriaService.actualizarMateria(id, nombre, curso_id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Materia no encontrada' });
        }
        res.status(200).json({ message: 'Materia actualizada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteMateria = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await MateriaService.eliminarMateria(id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Materia no encontrada' });
        }
        res.status(200).json({ message: 'Materia eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
