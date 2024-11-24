const db = require('../config/db_config');

const Calificacion = {
    // Obtener todas las calificaciones
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Calificaciones');
        return rows;
    },

    // Obtener calificaciones por estudiante
    getByEstudianteId: async (estudiante_id) => {
        const [rows] = await db.query('SELECT * FROM Calificaciones WHERE estudiante_id = ?', [estudiante_id]);
        return rows;
    },

    // Crear una nueva calificación
    create: async (estudiante_id, materia_id, periodo, calificacion) => {
        const [result] = await db.query(
            'INSERT INTO Calificaciones (estudiante_id, materia_id, periodo, calificacion) VALUES (?, ?, ?, ?)',
            [estudiante_id, materia_id, periodo, calificacion]
        );
        return result.insertId; // Devuelve el ID del registro insertado
    },

    // Actualizar una calificación
    update: async (id, calificacion) => {
        const [result] = await db.query(
            'UPDATE Calificaciones SET calificacion = ? WHERE id = ?',
            [calificacion, id]
        );
        return result.affectedRows; // Devuelve el número de filas afectadas
    },

    // Eliminar una calificación
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM Calificaciones WHERE id = ?', [id]);
        return result.affectedRows;
    },
};

module.exports = Calificacion;
