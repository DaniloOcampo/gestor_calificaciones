const db = require('../config/db_config'); // Importar la conexión a la base de datos

const Estudiante = {
    // Obtener todos los estudiantes
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Estudiantes');
        return rows;
    },

    // Crear un nuevo estudiante
    create: async (usuario_id, curso_id) => {
        const [result] = await db.query(
            'INSERT INTO Estudiantes (usuario_id, curso_id) VALUES (?, ?)',
            [usuario_id, curso_id]
        );
        return result.insertId; // Retorna el ID del registro insertado
    },

    // Actualizar un estudiante
    update: async (id, usuario_id, curso_id) => {
        const [result] = await db.query(
            'UPDATE Estudiantes SET usuario_id = ?, curso_id = ? WHERE id = ?',
            [usuario_id, curso_id, id]
        );
        return result.affectedRows; // Retorna el número de filas afectadas
    },

    // Eliminar un estudiante
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM Estudiantes WHERE id = ?', [id]);
        return result.affectedRows;
    },
};

module.exports = Estudiante;
