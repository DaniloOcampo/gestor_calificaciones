const db = require('../config/db_config');

const Materia = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Materias');
        return rows;
    },

    create: async (nombre, curso_id) => {
        const [result] = await db.query(
            'INSERT INTO Materias (nombre, curso_id) VALUES (?, ?)',
            [nombre, curso_id]
        );
        return result.insertId;
    },

    update: async (id, nombre, curso_id) => {
        const [result] = await db.query(
            'UPDATE Materias SET nombre = ?, curso_id = ? WHERE id = ?',
            [nombre, curso_id, id]
        );
        return result.affectedRows;
    },

    delete: async (id) => {
        const [result] = await db.query('DELETE FROM Materias WHERE id = ?', [id]);
        return result.affectedRows;
    },
};

module.exports = Materia;
