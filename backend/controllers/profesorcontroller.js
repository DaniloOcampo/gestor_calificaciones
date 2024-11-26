const db = require("../config/db_config");

const profesorController = {
    getMaterias: async (req, res) => {
        try {
            const profesorId = req.user.id; // Usuario autenticado
            const [materias] = await db.query(
                "SELECT m.id, m.nombre FROM Materias m INNER JOIN ProfesoresMaterias pm ON m.id = pm.materia_id WHERE pm.profesor_id = ?",
                [profesorId]
            );
            res.status(200).json(materias);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al obtener las materias." });
        }
    },

    getEstudiantes: async (req, res) => {
        const { materiaId } = req.params;
        try {
            const [estudiantes] = await db.query(
                "SELECT e.id, u.nombre, u.email, c.nota FROM Estudiantes e INNER JOIN Usuarios u ON e.usuario_id = u.id LEFT JOIN Calificaciones c ON c.estudiante_id = e.id AND c.materia_id = ? WHERE e.curso_id = (SELECT curso_id FROM Materias WHERE id = ?)",
                [materiaId, materiaId]
            );
            res.status(200).json(estudiantes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al obtener los estudiantes." });
        }
    },

    updateNota: async (req, res) => {
        const { materiaId, estudianteId } = req.params;
        const { nota } = req.body;

        try {
            await db.query(
                "INSERT INTO Calificaciones (estudiante_id, materia_id, nota) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE nota = ?",
                [estudianteId, materiaId, nota, nota]
            );
            res.status(200).json({ message: "Nota actualizada exitosamente." });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al actualizar la nota." });
        }
    },
};

module.exports = profesorController;
