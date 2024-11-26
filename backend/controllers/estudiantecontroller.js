const db = require("../config/db_config");

const estudianteController = {
    getMaterias: async (req, res) => {
        const estudianteId = req.user.id; // ID del usuario autenticado

        try {
            const [materias] = await db.query(
                "SELECT m.nombre FROM Materias m INNER JOIN Cursos c ON m.curso_id = c.id INNER JOIN Estudiantes e ON c.id = e.curso_id WHERE e.usuario_id = ?",
                [estudianteId]
            );
            res.status(200).json(materias);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al obtener las materias." });
        }
    },

    getCalificaciones: async (req, res) => {
        const estudianteId = req.user.id;

        try {
            const [calificaciones] = await db.query(
                "SELECT m.nombre AS materia, c.nota FROM Calificaciones c INNER JOIN Materias m ON c.materia_id = m.id WHERE c.estudiante_id = ?",
                [estudianteId]
            );
            res.status(200).json(calificaciones);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al obtener las calificaciones." });
        }
    },
};

module.exports = estudianteController;
