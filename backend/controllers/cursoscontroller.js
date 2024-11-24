const CursoService = require('../services/cursoservice');

exports.getCursos = async (req, res) => {
    try {
        const cursos = await CursoService.obtenerCursos();
        res.status(200).json(cursos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCurso = async (req, res) => {
    try {
        const { nombre } = req.body;
        const cursoId = await CursoService.crearCurso(nombre);
        res.status(201).json({ id: cursoId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCurso = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const affectedRows = await CursoService.actualizarCurso(id, nombre);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }
        res.status(200).json({ message: 'Curso actualizado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCurso = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await CursoService.eliminarCurso(id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }
        res.status(200).json({ message: 'Curso eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
